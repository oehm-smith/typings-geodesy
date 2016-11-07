interface GML_3_2_1_CodeType {
    codeSpace: string,
    value: string
}

interface GML_3_2_1_StringOrRefType {
    value: array<string>
}

interface GML_3_2_1_TimePositionType {
    value: array<string>
}

interface GML_3_2_1_ReferenceType {
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
    calibrationDate: GML_3_2_1_TimePositionType,
    validTime: GML_3_2_1_TimePrimitivePropertyType,
    # SensorType
    type: GML_3_2_1s_.CodeType
    # AbstractGMLType
    description: GML_3_2_1_StringOrRefType
    descriptionReference: GML_3_2_1_ReferenceType
    # Other (don't know)
    extension: any
    identifier: GML_3_2_1_CodeType
    remarks: string
}

