---
title: "The 10 Best Bars in Des Moines"
date: "2015-12-13"
summary: "Using data to determine where to drink."
image: "/static/images/best-bars-in-des-moines/banner.png"
---

Hello world Im on it

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

Why do you
