import { faker } from "@faker-js/faker";

export function generateBookingData() {
  return {
    passenger1: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),

      dob: {
        year: "2026",
        month: "July",
        day: "12",
      },
    },

    passenger2: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),

      dob: {
        year: "2025",
        month: "June",
        day: "12",
      },
    },

    travel: {
      from: faker.location.city(),
      to: faker.location.city(),
    },

    billing: {
      name: faker.person.fullName(),

      phone: "9847589654",

      email: faker.internet.email(),

      country: "Netherlands",

      address: faker.location.streetAddress(),

      postcode: faker.location.zipCode(),

      city: faker.location.city(),
    },

    notes: faker.lorem.paragraph(),
  };
}
