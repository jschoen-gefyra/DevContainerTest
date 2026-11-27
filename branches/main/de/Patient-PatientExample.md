# PatientExample - Schulungs-IG v0.1.0

## Beispiel Patient: PatientExample

Profil: [MyPatient](StructureDefinition-MyPatient.md)

James Pond (no stated gender), DoB Unknown

-------



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "PatientExample",
  "meta" : {
    "profile" : ["http://gefyra.info/training/StructureDefinition/MyPatient"]
  },
  "name" : [{
    "family" : "Pond",
    "given" : ["James"]
  }]
}

```
