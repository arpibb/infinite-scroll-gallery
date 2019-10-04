import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteImages from "../components/infiniteImages"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <h1 className="is-size-3">Images from Unsplash...</h1>
    <p style={{ marginBottom: "5%" }}>
        Now this is the Law of the Jungle, as old and true as the sky, for as
        long as you keep scrolling, you shall find more doggo images 🐶 🐕.
    </p>
    <InfiniteImages />
  </Layout>
)

export default Gallery
