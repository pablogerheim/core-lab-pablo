export const swaggerDocument = {
    "openapi": "3.0.3",
    "info": {
        "title": "Core Lab",
        "version": "1.0.11"
    },
    "servers": [
        {
            "url": "https://localhost:3002"
        }
    ],
    "tags": [
        {
            "name": "/",
            "description": "Everything about your Vehicles",
            "externalDocs": {
                "description": "Find out more",
                "url": "http://swagger.io"
            }
        }
    ],
    "paths": {
        "/": {
            "get": {
                "tags": [
                    "/"
                ],
                "summary": "Update an existing Vehicle",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/VehicleU"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                }
            },
            "patch": {
                "tags": [
                    "/"
                ],
                "summary": "Togle vehicle",
                "description": "make an existing vehicle favorite",
                "operationId": "favorite vehicle",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Id"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/VehicleU"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                }
            },
            "post": {
                "tags": [
                    "/"
                ],
                "summary": "Add a new vehicle to the store",
                "description": "Add a new vehicle to the store",
                "operationId": "addVehicle",
                "requestBody": {
                    "description": "Create a new vehicle in the store",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/VehicleC"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/VehicleU"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                }
            },
            "put": {
                "tags": [
                    "/"
                ],
                "summary": "Finds All products",
                "description": "Update an existing Vehicle by Id",
                "operationId": "updateVehicle",
                "requestBody": {
                    "description": "Update an existent vehicle in the store",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/VehicleU"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/VehicleU"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                }
            }
        },
        "/id": {
            "get": {
                "tags": [
                    "/"
                ],
                "summary": "Finds Vehicle By Id",
                "operationId": "Id",
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "description": "Tags to filter by",
                        "required": true,
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/VehicleU"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                }
            },
            "delete": {
                "tags": [
                    "/"
                ],
                "summary": "Deletes a vehicle",
                "description": "delete a vehicle",
                "operationId": "deleteVehicle",
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "description": "Vehicle id to delete",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Invalid pet value"
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Id": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "example": "10"
                    }
                }
            },
            "VehicleU": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "format": "int64",
                        "example": "10"
                    },
                    "name": {
                        "type": "string",
                        "example": "carro 1"
                    },
                    "description": {
                        "type": "string",
                        "example": "Primeiro carro"
                    },
                    "isFavorite": {
                        "type": "boolean",
                        "example": true
                    },
                    "year": {
                        "type": "string",
                        "example": "2018"
                    },
                    "color": {
                        "type": "string",
                        "example": "vermelho"
                    },
                    "price": {
                        "type": "string",
                        "example": "60500"
                    },
                    "createdAt": {
                        "type": "string",
                        "example": "2022-07-11T23:14:36.131Z"
                    }
                }
            },
            "VehicleC": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "example": "carro 1"
                    },
                    "description": {
                        "type": "string",
                        "example": "Primeiro carro"
                    },
                    "isFavorite": {
                        "type": "boolean",
                        "example": true
                    },
                    "year": {
                        "type": "string",
                        "example": "2018"
                    },
                    "color": {
                        "type": "string",
                        "example": "vermelho"
                    },
                    "price": {
                        "type": "string",
                        "example": "60500"
                    },
                    "createdAt": {
                        "type": "string",
                        "example": "2022-07-11T23:14:36.131Z"
                    }
                }
            }
        },
        "requestBodies": {
            "VehicleU": {
                "description": "Vehicle object that needs to be added to the store",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/VehicleU"
                        }
                    }
                }
            },
            "VehicleC": {
                "description": "Vehicle object that needs to be added to the store",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/VehicleC"
                        }
                    }
                }
            },
            "Id": {
                "description": "Id",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Id"
                        }
                    }
                }
            }
        }
    }
}
