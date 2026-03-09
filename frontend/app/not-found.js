import { getPostBySlug } from '@/lib/posts';
 

export default function Page({ params }) {
  const { slug } = params || {};

  if (!slug) {
    return <h1>Post not found</h1>;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}