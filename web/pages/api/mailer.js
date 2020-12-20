import mailjet from 'node-mailjet';

export default async (req, res) => {
  const { method } = req;

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
          Subject: 'Greetings from Mailjet.',
          TextPart: 'My first Mailjet email',
          HTMLPart:
            "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          CustomID: 'AppGettingStartedTest',
        },
      ],
    });

  switch (method) {
    case 'POST':
      request
        .then((result) => {
          res.status(200).json({ success: true, data: result.body });
        })
        .catch((err) => {
          console.log(err.statusCode);
          res
            .status(400)
            .json({ success: false, error: 'Something has gone wrong.' });
        });
      break;
    default:
      res
        .status(400)
        .json({ success: false, error: 'Something has gone wrong.' });
      break;
  }
};
