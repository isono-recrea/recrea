import { NextResponse } from "next/server"

const SLACK_WEBHOOK_URL =
  process.env.SLACK_WEBHOOK_URL || "https://hooks.slack.com/services/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"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, position, email, phone, message } = body

    // 必須項目の検証
    if (!name || !company || !position || !email) {
      return NextResponse.json({ error: "必須項目が入力されていません" }, { status: 400 })
    }

    // Slackに送信するメッセージを構築
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "新しいお問い合わせがありました",
            emoji: true,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*お名前:*\n${name}`,
            },
            {
              type: "mrkdwn",
              text: `*会社名:*\n${company}`,
            },
          ],
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*役職:*\n${position}`,
            },
            {
              type: "mrkdwn",
              text: `*メールアドレス:*\n${email}`,
            },
          ],
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*電話番号:*\n${phone || "なし"}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*お問い合わせ内容:*\n${message || "なし"}`,
          },
        },
      ],
    }

    // Slack Webhookに送信
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    })

    if (!slackResponse.ok) {
      console.error("Slack通知の送信に失敗しました")
      return NextResponse.json({ error: "Slack通知の送信に失敗しました" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("お問い合わせ処理中にエラーが発生しました:", error)
    return NextResponse.json({ error: "お問い合わせ処理中にエラーが発生しました" }, { status: 500 })
  }
}

