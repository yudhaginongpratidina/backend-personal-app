// LIBS
import request from "supertest";
import { prismaClient } from "../../application/database.js";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = `http://localhost:${process.env.APPLICATION_PORT}`;

class TechstackTest {

    static async create() {
        await prismaClient.techstack.create({
            data: {
                name: "test"
            }
        })
    }

    static async delete() {
        await prismaClient.techstack.deleteMany({ where: {} })
    }

    static async get() {
        const techstack = await prismaClient.techstack.findFirst({
            where: {
                name: "test"
            }
        })
        return techstack
    }

}


describe("GET /techstacks", () => {

    beforeEach(async () => {
        await TechstackTest.create();
    })

    afterEach(async () => {
        await TechstackTest.delete();
    })

    it("should get all techstack", async () => {
        const response = await request(baseUrl).get("/techstacks");
        expect(response.statusCode).toEqual(200);
        expect(response.body.data.length).toEqual(1);
    })
})


describe("GET /techstacks/:id", () => {

    beforeEach(async () => {
        await TechstackTest.create();
    })

    afterEach(async () => {
        await TechstackTest.delete();
    })

    it("should reject get a techstack if request id is invalid", async () => {
        const response = await request(baseUrl).get("/techstacks/0");
        expect(response.statusCode).toEqual(400);
        expect(response.body.message).toBeDefined();
    })

    it("should get a techstack", async () => {
        const techstack = await TechstackTest.get();
        const response = await request(baseUrl).get(`/techstacks/${techstack.id}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body.data.id).toEqual(techstack.id);
    })
})


describe("POST /techstacks", () => {

    beforeEach(async () => {
        await TechstackTest.create();
    })

    afterEach(async () => {
        await TechstackTest.delete();
    })


    it("should reject create a techstack if request is invalid", async () => {
        const response = await request(baseUrl).post("/techstacks").send({});
        expect(response.statusCode).toEqual(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to create a techstack", async () => {
        const response = await request(baseUrl).post("/techstacks").send({
            name: "test"
        });
        expect(response.statusCode).toEqual(201);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.name).toBe("test");
    })
})


describe("PATCH /techstacks/:id", () => {

    beforeEach(async () => {
        await TechstackTest.create();
    })

    afterEach(async () => {
        await TechstackTest.delete();
    })


    it("should reject update a techstack if request is invalid", async () => {
        const response = await request(baseUrl).patch("/techstacks/0");
        expect(response.statusCode).toEqual(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to update a techstack", async () => {
        const techstack = await TechstackTest.get();
        const response = await request(baseUrl).patch(`/techstacks/${techstack.id}`).send({
            name: "test2"
        });
        expect(response.statusCode).toEqual(200);
        expect(response.body.data.id).toEqual(techstack.id);
        expect(response.body.data.name).toBe("test2");
    })
})


describe("DELETE /techstacks/:id", () => {

    beforeEach(async () => {
        await TechstackTest.create();
    })

    afterEach(async () => {
        await TechstackTest.delete();
    })


    it("should reject delete a techstack if request id is invalid", async () => {
        const response = await request(baseUrl).delete("/techstacks/0");
        expect(response.statusCode).toEqual(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to delete a techstack", async () => {
        const techstack = await TechstackTest.get();
        const response = await request(baseUrl).delete(`/techstacks/${techstack.id}`);
        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toBe("Delete Techstack By Id");
        expect(response.body.data.id).toBe(techstack.id);
    })
})