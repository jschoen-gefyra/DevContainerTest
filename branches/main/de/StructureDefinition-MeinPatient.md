# MeinPatient - Schulungs-IG v0.1.0

## Ressourcenprofil: MeinPatient 

**Usages:**

* Examples for this Profil: [Patient/MeinBeispielPatient](Patient-MeinBeispielPatient.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/info.gefyra.training|current/StructureDefinition/StructureDefinition-MeinPatient.json)

### Formale Ansichten des Profilinhalts

 [Beschreibung von Profilen, Differentials, Snapshots und deren Repräsentationen](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Schlüsselelemente-Tabelle](#tabs-key) 
*  [Differential-Tabelle](#tabs-diff) 
*  [Snapshot-Tabelle](#tabs-snap) 
*  [Statistiken/Referenzen](#tabs-summ) 
*  [Alle](#tabs-all) 

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Patient](http://hl7.org/fhir/R4/patient.html) 

#### Constraints

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Patient](http://hl7.org/fhir/R4/patient.html) 

 **Schlüsselelemente-Ansicht** 

#### Terminology Bindings

#### Constraints

 **Differential-Ansicht** 

Diese Struktur ist abgeleitet von [Patient](http://hl7.org/fhir/R4/patient.html) 

#### Constraints

 **Snapshot-AnsichtView** 

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Patient](http://hl7.org/fhir/R4/patient.html) 

 

Weitere Repräsentationen des Profils: [CSV](../StructureDefinition-MeinPatient.csv), [Excel](../StructureDefinition-MeinPatient.xlsx), [Schematron](../StructureDefinition-MeinPatient.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "MeinPatient",
  "url" : "http://gefyra.info/training/StructureDefinition/MeinPatient",
  "version" : "0.1.0",
  "name" : "MeinPatient",
  "status" : "draft",
  "date" : "2026-11-27T11:50:37+00:00",
  "publisher" : "Gefyra GmbH",
  "contact" : [{
    "name" : "Gefyra GmbH",
    "telecom" : [{
      "system" : "url",
      "value" : "https://gefyra.info/"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "loinc",
    "uri" : "http://loinc.org",
    "name" : "LOINC code for the element"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Patient",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Patient",
      "path" : "Patient"
    },
    {
      "id" : "Patient.extension",
      "path" : "Patient.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "min" : 1
    },
    {
      "id" : "Patient.extension:Spezies",
      "path" : "Patient.extension",
      "sliceName" : "Spezies",
      "min" : 1,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://gefyra.info/training/StructureDefinition/Species"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier",
      "path" : "Patient.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "min" : 1
    },
    {
      "id" : "Patient.identifier:BuergerID",
      "path" : "Patient.identifier",
      "sliceName" : "BuergerID",
      "min" : 1,
      "max" : "1",
      "patternIdentifier" : {
        "system" : "http://fhir.ufp/sid/ufp-citizen-id"
      },
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:BuergerID.system",
      "path" : "Patient.identifier.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:BuergerID.value",
      "path" : "Patient.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:VersichertenID",
      "path" : "Patient.identifier",
      "sliceName" : "VersichertenID",
      "min" : 0,
      "max" : "1",
      "patternIdentifier" : {
        "system" : "http://fhir.de/sid/gkv/kvid-10"
      },
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:VersichertenID.system",
      "path" : "Patient.identifier.system",
      "min" : 1
    },
    {
      "id" : "Patient.identifier:VersichertenID.value",
      "path" : "Patient.identifier.value",
      "min" : 1,
      "constraint" : [{
        "key" : "KVID-Test",
        "severity" : "warning",
        "human" : "Überprüfung der Syntax einer KVID",
        "expression" : "matches('^[A-Z][0-9]{9}$')",
        "source" : "http://gefyra.info/training/StructureDefinition/MeinPatient"
      }]
    },
    {
      "id" : "Patient.identifier:Reisepassnummer",
      "path" : "Patient.identifier",
      "sliceName" : "Reisepassnummer",
      "min" : 0,
      "max" : "1",
      "patternIdentifier" : {
        "type" : {
          "coding" : [{
            "code" : "PPN"
          }]
        }
      },
      "mustSupport" : true
    },
    {
      "id" : "Patient.identifier:Reisepassnummer.type",
      "path" : "Patient.identifier.type",
      "min" : 1
    },
    {
      "id" : "Patient.identifier:Reisepassnummer.value",
      "path" : "Patient.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.name",
      "path" : "Patient.name",
      "mustSupport" : true
    },
    {
      "id" : "Patient.name.family",
      "path" : "Patient.name.family",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.name.given",
      "path" : "Patient.name.given",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.gender",
      "path" : "Patient.gender",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Patient.birthDate",
      "path" : "Patient.birthDate",
      "mustSupport" : true
    },
    {
      "id" : "Patient.address",
      "path" : "Patient.address",
      "min" : 1,
      "type" : [{
        "code" : "Address",
        "profile" : ["http://gefyra.info/training/StructureDefinition/MeineAdresse"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Patient.contact.address",
      "path" : "Patient.contact.address",
      "type" : [{
        "code" : "Address",
        "profile" : ["http://gefyra.info/training/StructureDefinition/MeineAdresse"]
      }]
    }]
  }
}

```
