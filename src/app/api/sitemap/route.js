export async function GET() {
    const baseUrl = "https://rafael-rizzo.com";

    const pages = [
        { url: "/", changefreq: "daily", priority: 1.0 }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map(
                ({ url, changefreq, priority }) => `
        <url>
            <loc>${baseUrl}${url}</loc>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
        </url>
        `
            )
            .join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
