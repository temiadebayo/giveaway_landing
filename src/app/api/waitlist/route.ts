import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { email, source = 'waitlist-cta' } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const { data: existingEntry } = await supabase
            .from('waitlist')
            .select('email')
            .eq('email', email.toLowerCase())
            .single();

        if (existingEntry) {
            return NextResponse.json(
                { error: 'Yo, you\'re already in the Tribe! 🔥' },
                { status: 409 }
            );
        }

        // Insert into Supabase
        const { data, error: dbError } = await supabase
            .from('waitlist')
            .insert([
                {
                    email: email.toLowerCase(),
                    source,
                    created_at: new Date().toISOString(),
                }
            ])
            .select()
            .single();

        if (dbError) {
            console.error('Supabase error:', dbError);
            return NextResponse.json(
                { error: 'Failed to join waitlist. Please try again.' },
                { status: 500 }
            );
        }

        // Send HYPE confirmation email with community links
        try {
            await resend.emails.send({
                from: 'Giveaway App <hello@trygiveaway.app>',
                to: email,
                subject: '🔥 YOU\'RE IN THE TRIBE NOW!',
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 20px;">
                            <tr>
                                <td align="center">
                                    <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden;">
                                        
                                        <!-- Hero Section -->
                                        <tr>
                                            <td style="padding: 50px 40px 30px; text-align: center; background: linear-gradient(180deg, rgba(149,6,250,0.15) 0%, transparent 100%);">
                                                <div style="font-size: 60px; margin-bottom: 20px;">🎉🔥🎉</div>
                                                <h1 style="margin: 0; font-size: 42px; font-weight: 900; color: #ffffff; line-height: 1.1;">
                                                    WELCOME TO<br>THE TRIBE!
                                                </h1>
                                            </td>
                                        </tr>
                                        
                                        <!-- Main Content -->
                                        <tr>
                                            <td style="padding: 30px 40px;">
                                                <p style="margin: 0 0 25px; font-size: 20px; line-height: 1.6; color: #94a3b8; text-align: center;">
                                                    Yooo you actually did it! 👑<br>
                                                    You're now one of the <strong style="color: #ffffff;">real ones</strong>.
                                                </p>
                                                
                                                <!-- Perks Box -->
                                                <div style="background: linear-gradient(135deg, rgba(149,6,250,0.1) 0%, rgba(0,212,255,0.1) 100%); border: 1px solid rgba(149,6,250,0.3); border-radius: 16px; padding: 25px; margin: 25px 0;">
                                                    <p style="margin: 0 0 15px; font-size: 14px; color: #a855f7; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                                                        What you just locked in:
                                                    </p>
                                                    <table width="100%" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td style="padding: 8px 0; font-size: 18px; color: #ffffff;">
                                                                💎 <strong>3 Months FREE</strong> premium
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 8px 0; font-size: 18px; color: #ffffff;">
                                                                🚀 <strong>Exclusive Beta Access</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 8px 0; font-size: 18px; color: #ffffff;">
                                                                👑 <strong>OG Status</strong> forever
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 8px 0; font-size: 18px; color: #ffffff;">
                                                                🎁 <strong>Secret Drops</strong> before anyone else
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                
                                                <p style="margin: 25px 0; font-size: 18px; line-height: 1.6; color: #94a3b8; text-align: center;">
                                                    We're cooking something <strong style="color: #ffffff;">absolutely insane</strong> for you.<br>
                                                    Skill-based giveaways that actually reward the <span style="color: #00D4FF;">real players</span>.
                                                </p>
                                            </td>
                                        </tr>
                                        
                                        <!-- Community Section -->
                                        <tr>
                                            <td style="padding: 0 40px 30px;">
                                                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 25px; text-align: center;">
                                                    <p style="margin: 0 0 15px; font-size: 20px; font-weight: 800; color: #ffffff;">
                                                        🎮 JOIN THE COMMUNITY
                                                    </p>
                                                    <p style="margin: 0 0 20px; font-size: 14px; color: #64748b;">
                                                        This is where the real ones link up. Don't miss out.
                                                    </p>
                                                    
                                                    <!-- Community Buttons -->
                                                    <table width="100%" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td align="center" style="padding: 5px;">
                                                                <a href="https://discord.gg/JUqsA75mG7" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #5865F2 0%, #7289DA 100%); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 10px; margin: 5px;">
                                                                    🎮 Join Discord
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" style="padding: 5px;">
                                                                <a href="#whatsapp" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 10px; margin: 5px;">
                                                                    💬 Join WhatsApp
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" style="padding: 5px;">
                                                                <a href="#telegram" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #26A5E4 0%, #0088CC 100%); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 10px; margin: 5px;">
                                                                    ✈️ Join Telegram
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    
                                                    <!-- Social Links -->
                                                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                                                        <p style="margin: 0 0 10px; font-size: 12px; color: #64748b;">
                                                            Follow us for updates & exclusive content:
                                                        </p>
                                                        <a href="#twitter" style="display: inline-block; padding: 8px 16px; background: #000000; color: #ffffff; font-size: 12px; font-weight: 600; text-decoration: none; border-radius: 8px; margin: 3px; border: 1px solid rgba(255,255,255,0.2);">
                                                            𝕏 Twitter
                                                        </a>
                                                        <a href="#tiktok" style="display: inline-block; padding: 8px 16px; background: #000000; color: #ffffff; font-size: 12px; font-weight: 600; text-decoration: none; border-radius: 8px; margin: 3px; border: 1px solid rgba(255,255,255,0.2);">
                                                            🎵 TikTok
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        <!-- CTA Button -->
                                        <tr>
                                            <td style="padding: 0 40px 40px; text-align: center;">
                                                <a href="https://trygiveaway.app" style="display: inline-block; padding: 18px 40px; background: linear-gradient(135deg, #9506FA 0%, #00D4FF 100%); color: #ffffff; font-size: 18px; font-weight: 800; text-decoration: none; border-radius: 14px; box-shadow: 0 10px 40px rgba(149,6,250,0.3);">
                                                    SEE WHAT'S COMING 👀
                                                </a>
                                            </td>
                                        </tr>
                                        
                                        <!-- Hype Section -->
                                        <tr>
                                            <td style="padding: 30px 40px; background: rgba(255,255,255,0.02); text-align: center;">
                                                <p style="margin: 0 0 10px; font-size: 24px;">
                                                    👊😎🔥
                                                </p>
                                                <p style="margin: 0; font-size: 16px; color: #64748b; font-style: italic;">
                                                    "The future of giveaways is about to hit different"
                                                </p>
                                            </td>
                                        </tr>
                                        
                                        <!-- Footer -->
                                        <tr>
                                            <td style="padding: 30px 40px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
                                                <p style="margin: 0 0 10px; font-size: 14px; color: #64748b;">
                                                    © 2026 Giveaway App. Made for the culture. 🔥
                                                </p>
                                                <p style="margin: 0; font-size: 12px; color: #475569;">
                                                    You're receiving this because you joined the tribe.<br>
                                                    No take-backs. You're stuck with us now. 😎
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </body>
                    </html>
                `,
            });
        } catch (emailError) {
            // Log but don't fail the request if email fails
            console.error('Email send error:', emailError);
        }

        return NextResponse.json(
            {
                success: true,
                message: 'You\'re in the Tribe now! 🔥'
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Waitlist API error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
