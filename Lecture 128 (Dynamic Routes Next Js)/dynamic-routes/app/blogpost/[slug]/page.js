export default async function Page({ params }) {
  let languages = ["python", "javascript", "java", "cpp"];
  if (languages.includes(params.slug)) {
    return <div>My Post: {params.slug}</div>;
  } else {
    return <div>Post not found</div>;
  }
}
