
// call this service when we select a child from dropdown and click submit button in landing page. 
// It takes two query params childMacwisId (macwis Id of child that we selected in drop down) and workerEmail (logged in woker emailId).

// example: http://10.15.66.88:5100/YTL/JSON/CreateAppraisal?childMacwisId=000060992&workerEmail=Jacqueline.Potters@mdcps.ms.gov

export const APPRAISAL_JSON: any = {
    "appraisalStartDateString": "08/09/2018",
    "childId": 0,
    "childInfo":    {
       "dobString": "03/19/2000",
       "email": "",
       "firstName": "Desirae",
       "fullName": "Desirae Martin",
       "id": 4,
       "isActive": true,
       "lastName": "Martin",
       "macwisId": "000060992"
    },
    "childName": null,
    "commitDateString": "01/01/0001",
    "count":    [
             {
          "Key": 0,
          "Value": 16
       },
             {
          "Key": 1,
          "Value": 0
       },
             {
          "Key": 2,
          "Value": 0
       }
    ],
    "criminalJusticeInfo": null,
    "cssInfo": null,
    "demographicInfo": null,
    "documentInfo": null,
    "educationInfo": null,
    "employmentInfo": null,
    "goalActionInfo": null,
    "healthInfo": null,
    "housingInfo": null,
    "id": 18,
    "lifeSkillInfo": null,
    "personalInfo": null,
    "placementSafetyInfo": null,
    "pregnantParentingInfo": null,
    "relationshipInfo": null,
    "socialInterestInfo": null,
    "stipendInfo": null,
    "wasCompletedDuringFamTeamMeeting": false,
    "wasYouthPresent": false,
    "workerId": 0,
    "workerInfo":    {
       "email": "Jacqueline.Potters@mdcps.ms.gov",
       "firstName": "Jacqueline",
       "id": 8,
       "isTransitionNav": true,
       "lastName": "Potters",
       "macwisId": "004846796",
       "phone": "(601) 443-7958",
       "workerName": "Jacqueline Potters"
    },
    "workerName": null
 }