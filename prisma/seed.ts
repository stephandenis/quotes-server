import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  //delete message
  await prisma.message.deleteMany({});
  // delete user
  await prisma.user.deleteMany({});
  // dummy user/message creation
  await prisma.user.create({
    data: {
      name: 'Albert Einstein',
      messages: {
        create: [
          {
            body: '“Never memorize something that you can look up.”',
          },
          {
            body: '“We cannot solve our problems with the same thinking we used when we created them.”',
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: 'Benjamin Franklin',
      messages: {
        create: [
          {
            body: '“Well done is better than well said.”',
          },
          {
            body: '“Tell me and I forget. Teach me and I remember. Involve me and I learn.”',
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: 'C.S. Lewis',
      messages: {
        create: [
          {
            body: '“We are what we believe we are.”',
          },
          {
            body: '“There are far, far better things ahead than any we leave behind.”',
          },
        ],
      },
    },
  });
};

main().then(() => {
  console.log('nice seed');
});
