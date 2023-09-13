import { gql } from '@apollo/client';

export const GET_CHECK_INS = gql`
  query GetCheckIns {
    check_in {
      id
      name
      comment
      image_url
    }
  }
`;
