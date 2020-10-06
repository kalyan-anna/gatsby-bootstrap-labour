const getOccupationTypes = (): Promise<{ name: string; value: string }[]> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            name: 'Waiter',
            value: 'Waiter',
          },
          {
            name: 'Paramedic',
            value: 'Paramedic',
          },
          {
            name: 'Dentist',
            value: 'Dentist',
          },
          {
            name: 'Nurse',
            value: 'Nurse',
          },
          {
            name: 'Doctor',
            value: 'Doctor',
          },
          {
            name: 'Electrician',
            value: 'Electrician',
          },
          {
            name: 'Software Engineer',
            value: 'Software Engineer',
          },
          {
            name: 'Reporter',
            value: 'Reporter',
          },
          {
            name: 'Construction worker',
            value: 'Construction worker',
          },
          {
            name: 'Photographer',
            value: 'Photographer',
          },
          {
            name: 'Gardener',
            value: 'Gardener',
          },
          {
            name: 'Architect',
            value: 'Architect',
          },
          {
            name: 'Housewife',
            value: 'Housewife',
          },
        ]),
      3000
    )
  );
};

export const refDataService = {
  getOccupationTypes,
};
