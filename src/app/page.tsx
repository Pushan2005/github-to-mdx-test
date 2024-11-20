import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import "github-markdown-css/github-markdown.css";

export default async function HomePage() {
    const source = fetch(process.env.NEXT_PUBLIC_SOURCE!).then((response) =>
        response.text()
    );

    const output = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(await source);

    console.log(output.toString());

    return (
        <div className="markdown-body">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: output.toString() }} />
        </div>
    );
}
