// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //backendAPI: "https://localhost:7148"
  backendAPI: "https://bionic-backend.herokuapp.com",
  firebaseConfig : {
    apiKey: 'AIzaSyCRDMrr9fhO9hH1_OFmlv-BOzfsmy8D3Sg',
    authDomain: 'bionicwebapp.firebaseapp.com',
    databaseURL:
      'https://bionicwebapp-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'bionicwebapp',
    storageBucket: 'bionicwebapp.appspot.com',
    messagingSenderId: '49326962456',
    appId: '1:49326962456:web:ff333abe85c26c53d6506d',
    measurementId: 'G-H9G63HPD7M',
  }
};

// For PDF TO HTML
//https://localhost:7148/api/PdfConverter/url?SourceFileUrl=asd

// HTML TO BIONIC
//https://localhost:7148/api/BionicConverter?url=asd

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
