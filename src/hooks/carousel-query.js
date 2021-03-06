import {useStaticQuery, graphql} from 'gatsby';

export const CarouselStaticQuery = () => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
        query CarouselStaticQuery {
          allMarkdownRemark(filter: {frontmatter: {carousel: {eq: true}}}) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  blurb
                  docType
                  logo {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                  title
                  url
                }
              }
            }
          }
        }
    `
    );
    return allMarkdownRemark.edges.map(e => e.node);
};
