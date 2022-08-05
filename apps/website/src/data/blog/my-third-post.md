---
title: "Hello this is my third post"
createdAt: "2020-12-13"
updatedAt: "2020-12-13"
author: "Sébastien Vanvelthem"
summary: "Using data to determine where to drink."
image: "https://placekitten.com/g/800/600"
---

Hello world it's just a test for now

```tsx {1,3-4} showLineNumbers
const PostLayout: FC<Props> = (props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1>{post.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  );
};
```

Need more time on it
