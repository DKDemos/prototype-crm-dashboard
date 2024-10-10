'use server';

export const fetchUsers = async () => {
  try {
    const user = await fetch(
      'https://fakerapi.it/api/v2/persons?_quantity=30&_locale=uk_UA&_seed=crm',
      {
        method: 'GET',
      }
    ).then((res) => res.json());

    return user.data;
  } catch (error) {
    console.log(error);
  }
};
