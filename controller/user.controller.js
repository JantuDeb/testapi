import User from "../model/user.model.js";

export const signUp = async (req, res) => {
  const { password, email, name } = req.body;
  console.log(req.body);
  try {
    const user = await User.create({ password, email, name });
    const token  = user.getJwtToken();
    console.log(token);
    res.send({ success: true, user, token} );
  } catch (error) {
      console.log(error.message);
    res.send({ success: false, error });
  }
};