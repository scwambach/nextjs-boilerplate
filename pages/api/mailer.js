import mailjet from 'node-mailjet';

export default async (req, res) => {
  const request = mailjet
    .connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET)
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'noreply@scottwamba.ch',
            Name: 'No Reply',
          },
          To: [
            {
              Email: 'scott@scottwamba.ch',
              Name: 'Scott',
            },
          ],
          Subject: 'HI!!!!!!! from Mailjet.',
          TextPart: 'My first Mailjet email',
          HTMLPart: `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title> <!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style type="text/css">#outlook a{padding:0}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic}p{display:block;margin:13px 0}</style><!--[if mso]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <!--[if lte mso 11]><style type="text/css">.mj-outlook-group-fix{width:100% !important}</style><![endif]--><style type="text/css">@media only screen and (min-width:480px){.mj-column-px-600{width:600px !important;max-width:600px}}</style><style type="text/css">@media only screen and (max-width:480px){table.mj-full-width-mobile{width:100% !important}td.mj-full-width-mobile{width:auto !important}}</style></head><body style="background-color:#f5f8d1;"><div style="background-color:#f5f8d1;" > <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"> <v:image style="border:0;height:200px;mso-position-horizontal:center;position:absolute;top:0;width:600px;z-index:-3;" src="https://i.imgur.com/V4Kpisz.jpg" xmlns:v="urn:schemas-microsoft-com:vml" /> <![endif]--><div style="margin:0 auto;max-width:600px;" ><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" ><tr style="vertical-align:top;" ><td background="https://i.imgur.com/V4Kpisz.jpg" style="background:#2a3448 url(https://i.imgur.com/V4Kpisz.jpg) no-repeat center center / cover;background-position:center center;background-repeat:no-repeat;padding:0px;vertical-align:top;" height="200" > <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style=""> <![endif]--><div class="mj-hero-content" style="margin:0px auto;" ><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;" ><tr><td style="" ><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;" ><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;" ><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" ><tbody><tr><td style="width:200px;"> <img height="auto" src="https://i.imgur.com/rlNWtVE.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="200" /></td></tr></tbody></table></td></tr></table></td></tr></table></div> <!--[if mso | IE]></td></tr></table> <![endif]--></td></tr></table></div> <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" ><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;" > <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" > <![endif]--><div class="mj-column-px-600 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" ><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%" ><tr><td align="left" style="font-size:0px;padding:20px;word-break:break-word;" ><div style="font-family:Arial;font-size:35px;font-weight:900;line-height:40px;text-align:left;color:black;" >New Email from the contact form</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 20px;word-break:break-word;" ><div style="font-family:Arial;font-size:20px;line-height:20px;text-align:left;color:black;" ><strong>From:</strong> ${req.body.fullName}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 20px;word-break:break-word;" ><div style="font-family:Arial;font-size:20px;line-height:20px;text-align:left;color:black;" ><strong>Email:</strong> ${req.body.emailAddress}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 20px;word-break:break-word;" ><div style="font-family:Arial;font-size:20px;line-height:20px;text-align:left;color:black;" ><strong>Message:</strong><br /><br />${req.body.message}</div></td></tr></table></div> <!--[if mso | IE]></td></tr></table> <![endif]--></td></tr></tbody></table></div> <!--[if mso | IE]></td></tr></table> <![endif]--></div></body></html>`,
          CustomID: 'AppGettingStartedTest',
        },
      ],
    });

  return new Promise((resolve) => {
    request
      .then((result) => {
        res.status(200).json({ success: true, data: result.body });
        resolve();
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          error: `Something has gone wrong. ${err.statusCode}`,
        });
        resolve();
      });
  });
};
