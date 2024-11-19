const prisma = require("..\prisma");
const seed = async () => {
  for (let i=0; i<3;i++) {
    const playlists = [];
    for (let j=0; j<5; j++) {
      playlists.push({
        name : `user ${i+1}, ${j}`,
        description : `description of user${i+1}'s playlist${j}`,
        
      })
    }
    await prisma.user.create({
      data : {
        username : `user ${i+1}`,
        playlists : {create : playlists,}
      }
    })
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
