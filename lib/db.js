import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://NextJSCourse:123mudar@nextjscourse.stwpd.mongodb.net/auth?retryWrites=true&w=majority'
  );

  return client;
}
