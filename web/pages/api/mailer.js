import mailjet from 'node-mailjet';

export default async (req, res) => {
  const request = mailjet
    .connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET)
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'scottcwambach@gmail.com',
            Name: 'Scott',
          },
          To: [
            {
              Email: 'scott@scottwamba.ch',
              Name: 'Scott',
            },
          ],
          Subject: 'HI!!!!!!! from Mailjet.',
          TextPart: 'My first Mailjet email',
          HTMLPart:
            "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
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
          error: 'Something has gone wrong. ' + err.statusCode,
        });
        resolve();
      });
  });
};
