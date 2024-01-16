interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

const createPost = (post: Omit<Post, 'createdAt'>) => ({
  ...post,
  createdAt: new Date(),
});

console.log(createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
}));