# MeinBeispielPatient - Schulungs-IG v0.1.0

## Beispiel Patient: MeinBeispielPatient

Profil: [MeinPatient](StructureDefinition-MeinPatient.md)

Max Mustermann Male, DoB: 2222-12-22 ( http://fhir.ufp/sid/ufp-citizen-id#12341kjhkjh12341423)

-------

| | |
| :--- | :--- |
| Contact Detail | Teststr. 4 Musterhausen 12345 |
|  | Human |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "MeinBeispielPatient",
  "meta" : {
    "profile" : ["http://gefyra.info/training/StructureDefinition/MeinPatient"]
  },
  "extension" : [{
    "url" : "http://gefyra.info/training/StructureDefinition/Species",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://fhir.ufp/CodeSystem/species",
        "code" : "HS",
        "display" : "Human"
      }]
    }
  }],
  "identifier" : [{
    "system" : "http://fhir.ufp/sid/ufp-citizen-id",
    "value" : "12341kjhkjh12341423"
  }],
  "name" : [{
    "family" : "Mustermann",
    "given" : ["Max"]
  }],
  "gender" : "male",
  "birthDate" : "2222-12-22",
  "address" : [{
    "extension" : [{
      "url" : "http://gefyra.info/training/StructureDefinition/Planet",
      "valueString" : "Erde"
    },
    {
      "url" : "http://gefyra.info/training/StructureDefinition/Quadrant",
      "valueCode" : "alpha"
    }],
    "line" : ["Teststr. 4"],
    "city" : "Musterhausen",
    "postalCode" : "12345"
  }]
}

```
