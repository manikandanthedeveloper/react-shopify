export const GET_MAIN_MENU_QUERY = `
  query GetMainMenu {
    menu(handle: "main-menu") {
      items {
        id
        title
        url
        type
        items {
          id
          title
          url
          type
        }
      }
    }
  }
`;

export const TEST_QUERY = `
  {
    shop {
      name
    }
  }
`;
