import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, service, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to the Zizi Solutions team
    await transporter.sendMail({
      from: `"Zizi Solutions Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'admin@zizisolutions.co.za',
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
          <h2 style="color: #f4f53c; font-size: 24px; margin-bottom: 24px;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;"><a href="mailto:${email}" style="color: #f4f53c;">${email}</a></td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${company}</td>
            </tr>`
                : ''
            }
            ${
              service
                ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${service}</td>
            </tr>`
                : ''
            }
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #888; margin-bottom: 8px;">Message</p>
            <p style="color: #fff; line-height: 1.7; background: #111; padding: 16px; border-radius: 8px; border-left: 3px solid #f4f53c;">${message.replace(/\n/g, '<br/>')}</p>
          </div>

          <p style="color: #555; font-size: 12px; margin-top: 32px;">Sent via zizisolutions.co.za contact form</p>
        </div>
      `,
    })

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Zizi Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your message — Zizi Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
          <h2 style="color: #f4f53c; font-size: 24px; margin-bottom: 16px;">Thanks for reaching out, ${name}!</h2>
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
