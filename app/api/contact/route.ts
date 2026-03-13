import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const company = String(body.company || '').trim()
    const service = String(body.service || '').trim()
    const message = String(body.message || '').trim()
    const website = String(body.website || '').trim() // honeypot field

    if (website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (name.length > 120 || email.length > 254 || company.length > 150 || service.length > 150 || message.length > 5000) {
      return NextResponse.json(
        { error: 'One or more fields are too long.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_EMAIL,
    } = process.env

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('[contact/route] Missing SMTP environment variables')
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.verify()

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = escapeHtml(company)
    const safeService = escapeHtml(service)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

    await transporter.sendMail({
      from: `"Zizi Solutions Contact" <${SMTP_USER}>`,
      to: CONTACT_EMAIL || 'admin@zizisolutions.co.za',
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
          <h2 style="color: #f4f53c; font-size: 24px; margin-bottom: 24px;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;"><a href="mailto:${safeEmail}" style="color: #f4f53c;">${safeEmail}</a></td>
            </tr>
            ${
              safeCompany
                ? `<tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Company</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${safeCompany}</td>
                  </tr>`
                : ''
            }
            ${
              safeService
                ? `<tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Service</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${safeService}</td>
                  </tr>`
                : ''
            }
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #888; margin-bottom: 8px;">Message</p>
            <p style="color: #fff; line-height: 1.7; background: #111; padding: 16px; border-radius: 8px; border-left: 3px solid #f4f53c;">${safeMessage}</p>
          </div>

          <p style="color: #555; font-size: 12px; margin-top: 32px;">Sent via zizisolutions.co.za contact form</p>
        </div>
      `,
    })

    await transporter.sendMail({
      from: `"Zizi Solutions" <${SMTP_USER}>`,
      to: email,
      subject: "We've received your message — Zizi Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
          <h2 style="color: #f4f53c; font-size: 24px; margin-bottom: 16px;">Thanks for reaching out, ${safeName}!</h2>
          <p style="color: #aaa; line-height: 1.7;">We've received your message and will get back to you within <strong style="color: #fff;">24 hours</strong> on business days.</p>
          <p style="color: #aaa; line-height: 1.7; margin-top: 16px;">If your matter is urgent, you can reach us directly at <a href="tel:+27681545803" style="color: #f4f53c;">+27 68 154 5803</a>.</p>
          <hr style="border: none; border-top: 1px solid #222; margin: 32px 0;" />
          <p style="color: #555; font-size: 12px;">— The Zizi Solutions Team · zizisolutions.co.za</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[contact/route] Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}