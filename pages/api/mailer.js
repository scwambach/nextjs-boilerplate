import mailjet from 'node-mailjet';

export default async (req, res) => {
  let htmlMessage = '';
  let textMessage = '';
  let subject = 'Form Submission';
  let recipient = '';
  const logoUrl =
    'https://cdn.sanity.io/images/k702ll7a/production/6b56e2e4e89713a1915bcb7e349d220113f51726-2400x394.png?w=200';
  const footerLogoUrl =
    'https://cdn.sanity.io/images/k702ll7a/production/6b56e2e4e89713a1915bcb7e349d220113f51726-2400x394.png?w=180';

  Object.entries(req.body).forEach((entry, index) => {
    if (entry[0] === 'subject') {
      subject = entry[1];
    }
    if (entry[0] === 'recipient') {
      recipient = entry[1];
    }

    if (
      entry[0] !== 'hpFirst' &&
      entry[0] !== 'recipient' &&
      entry[0] !== 'submit' &&
      entry[0] !== 'subject' &&
      entry[1] !== ''
    ) {
      htmlMessage += `<li>${entry[0]}: ${entry[1]}</li>`;
      textMessage += `${entry[0]}: ${entry[1]}${
        Object.entries(req.body).length - 1 !== index && ', '
      }`;
    }
  });

  const request = mailjet
    .connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET)
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: recipient,
            Name: `Boilerplate - ${subject}`,
          },
          To: [
            {
              Email: recipient,
              Name: 'Boilerplate',
            },
          ],
          Subject: subject,
          TextPart: textMessage,
          HTMLPart: `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a{padding:0}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0}img{border:0;height:auto;line-height:100%;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}p{display:block;margin:13px 0}</style><!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">.mj-outlook-group-fix { width:100% !important; }</style><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px){.mj-column-per-50{width:50%!important;max-width:50%}.mj-column-per-100{width:100%!important;max-width:100%}}</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-50{width:50%!important;max-width:50%}.moz-text-html .mj-column-per-100{width:100%!important;max-width:100%}</style><style type="text/css">@media only screen and (max-width:480px){table.mj-full-width-mobile{width:100%!important}td.mj-full-width-mobile{width:auto!important}}</style></head><body style="word-spacing:normal;background-color:#d6dde5"><div style="background-color:#d6dde5"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%"><tbody><tr><td style="direction:ltr;font-size:0;padding:20px 0;text-align:center"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:10px;word-break:break-word"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0"><tbody><tr><td style="width:280px"><a href="https://sandbachs.vercel.app" target="_blank"><img alt="Racoon logo" height="auto" src="${logoUrl}" style="border:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="280"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#bada55;background-color:#bada55;margin:0 auto;max-width:600px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#bada55;background-color:#bada55;width:100%"><tbody><tr><td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:10px 25px;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px;word-break:break-word"><div style="font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:1;text-align:center;color:#fff"><p style="font-size:14px">Message from:</p><p style="font-size:27px">${subject}</p></div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%"><tbody><tr><td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px;padding-top:0;text-align:center"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%"><tbody><tr><td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%"><tbody><tr><td align="left" style="font-size:0;padding:10px 25px;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px;word-break:break-word"><div style="font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:20px;line-height:1;text-align:left;color:#000">${htmlMessage}</div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%"><tbody><tr><td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px;padding-top:0;text-align:center"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#bada55;background-color:#bada55;margin:0 auto;max-width:600px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#bada55;background-color:#bada55;width:100%"><tbody><tr><td style="direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px;padding-top:0;text-align:center"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:10px 25px;padding-top:20px;padding-right:0;padding-bottom:0;padding-left:0;word-break:break-word"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0"><tbody><tr><td style="width:180px"><img alt="Racoon logo" height="auto" src="${footerLogoUrl}" style="border:none;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="180"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`,
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
