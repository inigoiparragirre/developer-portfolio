// @flow strict
import { personalData } from "@/utils/data/personal-data";

export function generateStaticParams() {
  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]
}
 
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div>
    </div>
  );
};

export default BlogDetails;