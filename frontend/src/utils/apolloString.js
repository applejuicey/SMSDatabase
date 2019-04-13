import gql from 'graphql-tag';

const LOGIN = gql`mutation ($email: String!, $password: String!) {
                    login(email: $email, password: $password) {
                      currentUser{
                        id
                        email
                        name
                        role
                      }
                      token
                    }
                  }`;

const ME = gql`query{
                 me {
                   id
                   email
                   name
                   role
                 }
               }`;

const UPDATEUSER = gql`mutation ($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
                         updateUser(data: $data, where: $where) {
                           id
                           email
                           name
                           role
                         }
                       }`;

export { LOGIN, ME, UPDATEUSER };
