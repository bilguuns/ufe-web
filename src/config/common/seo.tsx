import React from "react";
import Head from "next/head";

type SeoProps = {
    title: string;
    description: string;
    canonical?: string;
    css?: string;
    js?: string;
    image?: string;
};

export const SEO: React.FC<SeoProps> = ({
    title,
    description,
    canonical,
    css,
    js,
    image,
}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
            name="viewport"
            content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta
            name="og:description"
            property="og:description"
            content={description}
        />
        <meta property="og:site_name" content="UFE" />
        <meta property="og:url" content={`${canonical}`} />
        {image ? (
            <meta property="og:image" content={`${image}`} />
        ) : (
            <meta
                property="og:image"
                content="https://www.ufe.edu.mn/pictures/dep-logo/ufe-95-logo.png"
            />
        )}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@ufe" />
        <meta name="twitter:creator" content="@ufe" />
        {image && <meta name="twitter:image" content={`${image}`} />}

        {css && <link rel="stylesheet" href={`${css}`} />}
        {canonical && <link rel="canonical" href={`${canonical}`} />}
    </Head>
);
