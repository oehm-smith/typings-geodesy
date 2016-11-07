interface GML_3_2_1.CodeType {
    codeSpace: string,
    value: string
}

interface GML_3_2_1.StringOrRefType {
    value: array<string>
}

interface GML_3_2_1.TimePositionType {
    value: array<string>
}

interface GML_3_2_1.ReferenceType {
    owns: boolean,
    href: string
}

interface HumiditySensor {
    dataSamplingInterval: number,
    accuracyPercentRelativeHumidity: number,
    aspiration: string,
    notes: string,
    # .BaseSensorEquipmentType
    manufacturer: string,  
    serialNumber: string,
    heightDiffToAntenna: number,
    calibrationDate: GML_3_2_1.TimePositionType,
    validTime: GML_3_2_1.TimePrimitivePropertyType,
    # SensorType
    type: GML_3_2_1.CodeType
    # AbstractGMLType
    description: GML_3_2_1.StringOrRefType
    descriptionReference: GML_3_2_1.ReferenceType
    # Other (don't know)
    extension: any
    identifier: GML_3_2_1.CodeType
    remarks: string
}

