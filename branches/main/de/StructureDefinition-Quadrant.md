# Quadrant - Schulungs-IG v0.1.0

## Extension: 

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [MeineAdresse](StructureDefinition-MeineAdresse.md)
* Examples for this Extension: [Patient/MeinBeispielPatient](Patient-MeinBeispielPatient.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/info.gefyra.training|current/StructureDefinition/StructureDefinition-Quadrant.json)

### Formale Ansichten des Extension-Inhalts

 [Beschreibung von Profilen, Differentials, Snapshots und deren Repräsentationen](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Differential-Tabelle](#tabs-diff) 
*  [Snapshot-Tabelle](#tabs-snap) 
*  [Statistiken/Referenzen](#tabs-summ) 
*  [Alle](#tabs-all) 

Diese Struktur ist abgeleitet von [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Terminology Bindings (Differential)

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 **Differential-Ansicht** 

Diese Struktur ist abgeleitet von [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Terminology Bindings (Differential)

 **Snapshot-Ansicht** 

#### Terminology Bindings

#### Constraints

Diese Struktur ist abgeleitet von [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 

Weitere Repräsentationen des Profils: [CSV](../StructureDefinition-Quadrant.csv), [Excel](../StructureDefinition-Quadrant.xlsx), [Schematron](../StructureDefinition-Quadrant.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "Quadrant",
  "url" : "http://gefyra.info/training/StructureDefinition/Quadrant",
  "version" : "0.1.0",
  "name" : "Quadrant",
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
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "Address"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "http://gefyra.info/training/StructureDefinition/Quadrant"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "code"
      }],
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://gefyra.info/training/ValueSet/QuadrantVS"
      }
    }]
  }
}

```
