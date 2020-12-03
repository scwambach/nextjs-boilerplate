import { connect } from '../../../tools/database';

export default async function (req, res) {
  const { db } = await connect();

  const { user } = req.body;

  const result = await db.collection('users').insertOne({
    user: {
      username: user.username,
      email: user.email,
      password: user.password,
    },
    createdOn: new Date(),
  });

  console.log(result.ops);

  res.json({});
}
