import { graphql, useStaticQuery } from "gatsby";

export const useContentfulCities = () => {
  const cities = useStaticQuery(graphql`
    query MyQuery {
      allContentfulCity {
        edges {
          node {
            name
            description
            location {
              lat
              lon
            }
            gatsbyPath(filePath: "/city/{contentfulCity.name}")
          }
        }
      }
    }
  `
  );
  return cities.allContentfulCity;
}