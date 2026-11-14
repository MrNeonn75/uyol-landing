import type { PrivacyContent } from './privacy.az.ts';

export const privacyEn: PrivacyContent = {
  lang: 'en',
  title: 'UYOL – Privacy Policy',
  lastUpdatedLabel: 'Last updated:',
  lastUpdatedDate: 'November 14, 2026',
  intro:
    'UYOL ("we", "us") is a platform for organizing intercity passenger rides and parcel deliveries for passengers and drivers. This policy explains how your personal data is collected, used, stored, and protected when you use the UYOL mobile applications (Passenger and Driver) and the uyol.app website.',
  contactEmail: 'support@uyol.app',
  contactWeb: 'https://uyol.app',
  sections: [
    {
      id: 'en-1',
      title: '1. Information We Collect',
      items: [
        {
          label: 'Account information:',
          text: 'first name, last name, phone number, email [YOXLA: does the app collect email], profile photo.',
        },
        {
          label: 'Additional information for drivers:',
          text: 'vehicle details (make, year, license plate number), vehicle photos, age [YOXLA: which fields are collected].',
        },
        {
          label: 'Third-party information:',
          text: 'the name, phone number, and gender of a passenger added to a trip by a driver. The person adding this information is responsible for ensuring they have the appropriate permission to provide it.',
        },
        {
          label: 'Location (geolocation) data:',
          text: 'precise and approximate location for selecting pickup and drop-off addresses, displaying the route on the map, and live tracking of the driver. [YOXLA: does the app collect background location data? If so, state this explicitly.]',
        },
        {
          label: 'Ticket and parcel information:',
          text: 'trip, ticket, seat selection, sender and recipient details for a parcel, parcel description, and photos you upload.',
        },
        {
          label: 'Messages:',
          text: 'in-app communications between passenger and driver.',
        },
        {
          label: 'Payment information:',
          text: 'payment status and amount. Card details are not stored by UYOL; payments are processed by [YOXLA: payment provider name].',
        },
        {
          label: 'Device and usage information:',
          text: 'device model, operating system, push notification token, crash and error reports [YOXLA: analytics/crash tools].',
        },
        {
          label: 'Camera and photos:',
          text: 'only when you upload a parcel photo or choose a profile photo, and only with your permission.',
        },
      ],
    },
    {
      id: 'en-2',
      title: '2. How We Use Information',
      items: [
        { text: 'organizing trips and parcel deliveries, booking, and fulfillment;' },
        { text: 'communication between driver and passenger (calls, messages);' },
        { text: 'tracking trips on the map and sending notifications;' },
        { text: 'account and payment security, and fraud prevention;' },
        { text: 'customer support and service improvement;' },
        { text: 'complying with legal obligations.' },
      ],
    },
    {
      id: 'en-3',
      title: '3. Sharing of Information',
      paragraphs: [
        'We do not sell your personal information for advertising purposes. Information is shared only with:',
      ],
      items: [
        {
          text: 'the other party participating in the trip (for example, the passenger’s name and pickup address with the driver; the driver’s name and vehicle details with the passenger);',
        },
        {
          text: 'service providers: maps and navigation [YOXLA: Google Maps etc.], payment [YOXLA], notification and hosting providers [YOXLA: Firebase etc.], only to the extent necessary to deliver the service;',
        },
        {
          text: 'competent government authorities when required by law.',
        },
      ],
      afterParagraphs: [
        'When you use the "Open in Waze" feature on the map, address information is passed to Waze and Waze’s own privacy policy applies.',
      ],
    },
    {
      id: 'en-4',
      title: '4. Security',
      paragraphs: [
        'Data transmission is protected with HTTPS/TLS. Access permissions are restricted. Because no system is 100% secure, we cannot guarantee absolute security.',
      ],
    },
    {
      id: 'en-5',
      title: '5. Data Retention',
      paragraphs: [
        'Information is retained for as long as your account remains active and as needed to provide the service. When an account is deleted, personal data is deleted within [YOXLA: N days]. Data required by law to be retained (such as payment records) is excluded. [YOXLA: exact retention periods]',
      ],
    },
    {
      id: 'en-6',
      title: '6. Your Rights',
      paragraphs: [
        'You have the right to access, correct, delete, object to the processing of your data, and request a copy of your data. To delete your account and data: [YOXLA: if available in the app, specify "Profile → ... → Delete account"] or follow the steps on /delete-account, or contact support@uyol.app.',
      ],
    },
    {
      id: 'en-7',
      title: '7. Children',
      paragraphs: [
        'UYOL is not intended for persons under 18 years of age, and we do not knowingly collect personal data from them. [YOXLA: confirm age restriction matches app rules]',
      ],
    },
    {
      id: 'en-8',
      title: '8. Changes to This Policy',
      paragraphs: [
        'When changes are made, the update date on this page will be revised. We will notify you inside the app regarding material changes.',
      ],
    },
    {
      id: 'en-9',
      title: '9. Contact',
      paragraphs: [
        // Add legal entity name here if required by Play Console.
        'Email: support@uyol.app',
        'Website: https://uyol.app',
      ],
    },
  ],
};
