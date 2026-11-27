window.artifactsTableData = {
  "de": {
    "labels": {
      "type":        "Typ",
      "category":    "Kategorie",
      "useGrouping": "Gruppierung verwenden",
      "clearAll":      "Alle entfernen",
      "linkToSection": "Link zu diesem Abschnitt",
      "headings":      "Überschriften",
      "headingsFull":  "Vollständig",
      "headingsTitle": "Titel",
      "headingsNone":  "Keine"
    },
    "groupDescriptions": {
      "-str-profile": "<p>Diese definieren Einschränkungen für FHIR-Ressourcen für Systeme, die mit dem Implementierungsleitfaden konform sind.</p>\n"
      ,"-str-datatype": "<p>Diese definieren Einschränkungen für FHIR-Datentypen für Systeme, die mit diesem Implementierungsleitfaden konform sind.</p>\n"
      ,"-str-extension": "<p>Diese definieren Einschränkungen für FHIR-Datentypen für Systeme, die mit diesem Implementierungsleitfaden konform sind.</p>\n"
      ,"-term-valueset": "<p>Diese definieren Wertemengen, die von Systemen verwendet werden, die mit dem Implementierungsleitfaden konform sind.</p>\n"
      ,"-term-codesystem": "<p>Diese definieren neue CodeSysteme, die von Systemen verwendet werden, die mit diesem Implementierungsleitfaden konform sind.</p>\n"
      ,"-ex-example": "<p>Dies sind Beispielinstanzen, die zeigen, wie Daten aussehen könnten, die von Systemen produziert und konsumiert werden, die mit diesem Implementierungsleitfaden konform sind.</p>\n"
    },
    "rows": [
      { "p":1, "gid":"-str-profile", "g":"Strukturen: Ressourcenprofile", "n":"MeinPatient", "i":"MeinPatient", "t":"StructureDefinition", "u":"StructureDefinition-MeinPatient.html", "r":"StructureDefinition/MeinPatient", "d":"" },
      { "p":1, "gid":"-str-profile", "g":"Strukturen: Ressourcenprofile", "n":"MyPatient", "i":"MyPatient", "t":"StructureDefinition", "u":"StructureDefinition-MyPatient.html", "r":"StructureDefinition/MyPatient", "d":"<p>An example profile of the Patient resource.</p>" },
      { "p":2, "gid":"-str-datatype", "g":"Strukturen: Datentyp-Profile", "n":"AdrTestTest", "i":"AdrTestTest", "t":"StructureDefinition", "u":"StructureDefinition-AdrTestTest.html", "r":"StructureDefinition/AdrTestTest", "d":"" },
      { "p":2, "gid":"-str-datatype", "g":"Strukturen: Datentyp-Profile", "n":"MeineAdresse", "i":"MeineAdresse", "t":"StructureDefinition", "u":"StructureDefinition-MeineAdresse.html", "r":"StructureDefinition/MeineAdresse", "d":"" },
      { "p":3, "gid":"-str-extension", "g":"Strukturen: Extension-Definitionen", "n":"Ex", "i":"Ex", "t":"StructureDefinition", "u":"StructureDefinition-Ex.html", "r":"StructureDefinition/Ex", "d":"" },
      { "p":3, "gid":"-str-extension", "g":"Strukturen: Extension-Definitionen", "n":"Planet", "i":"Planet", "t":"StructureDefinition", "u":"StructureDefinition-Planet.html", "r":"StructureDefinition/Planet", "d":"<p>Extension for DataType <code class=\"language-plaintext highlighter-rouge\">Address</code> to add information about the planet on which the address is located.</p>" },
      { "p":3, "gid":"-str-extension", "g":"Strukturen: Extension-Definitionen", "n":"Quadrant", "i":"Quadrant", "t":"StructureDefinition", "u":"StructureDefinition-Quadrant.html", "r":"StructureDefinition/Quadrant", "d":"" },
      { "p":3, "gid":"-str-extension", "g":"Strukturen: Extension-Definitionen", "n":"Species", "i":"Species", "t":"StructureDefinition", "u":"StructureDefinition-Species.html", "r":"StructureDefinition/Species", "d":"" },
      { "p":4, "gid":"-term-valueset", "g":"Terminologie: ValueSets", "n":"QuadrantVS", "i":"QuadrantVS", "t":"ValueSet", "u":"ValueSet-QuadrantVS.html", "r":"ValueSet/QuadrantVS", "d":"" },
      { "p":5, "gid":"-term-codesystem", "g":"Terminologie: CodeSysteme", "n":"QuadrantCS", "i":"QuadrantCS", "t":"CodeSystem", "u":"CodeSystem-QuadrantCS.html", "r":"CodeSystem/QuadrantCS", "d":"" },
      { "p":6, "gid":"-ex-example", "g":"Beispiel: Beispielinstanzen", "n":"MeinBeispielPatient", "i":"MeinBeispielPatient", "t":"Patient", "u":"Patient-MeinBeispielPatient.html", "r":"Patient/MeinBeispielPatient", "d":"<p>here's my text</p>" },
      { "p":6, "gid":"-ex-example", "g":"Beispiel: Beispielinstanzen", "n":"PatientExample", "i":"PatientExample", "t":"Patient", "u":"Patient-PatientExample.html", "r":"Patient/PatientExample", "d":"<p>An example of a patient with a license to krill.</p>" }
    ]
  }
};
