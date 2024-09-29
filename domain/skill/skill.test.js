// LIBS
import request from "supertest";
import { prismaClient } from "../../application/database.js";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = `http://localhost:${process.env.APPLICATION_PORT}`;

class SkillTest {

    static async create() {
        await prismaClient.skill.create({
            data: {
                name: "test"
            }
        })
    }

    static async delete() {
        await prismaClient.skill.deleteMany({ where: {} })
    }

    static async get() {
        const skill = await prismaClient.skill.findFirst({
            where: {
                name: "test"
            }
        })
        return skill
    }
}


describe("GET /skills", () => {

    beforeEach(async () => {
        await SkillTest.create();
    })

    afterEach(async () => {
        await SkillTest.delete();
    })

    it("should be able to get all skills", async () => {
        const response = await request(baseUrl).get("/skills");
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(response.body.data.length).toBe(1);
    })
})

describe("GET /skills/:id", () => {
    beforeEach(async () => {
        await SkillTest.create();
    })

    afterEach(async () => {
        await SkillTest.delete();
    })


    it("should reject get a skill if request id is invalid", async () => {
        const response = await request(baseUrl).get("/skills/0");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to get a skill", async () => {
        const skill = await SkillTest.get();
        const response = await request(baseUrl).get(`/skills/${skill.id}`);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(skill.id);
    })
})


describe("POST /skills", () => {
    beforeEach(async () => {
        await SkillTest.create();
    })

    afterEach(async () => {
        await SkillTest.delete();
    })

    it("should reject create a skill if request is invalid", async () => {
        const response = await request(baseUrl).post("/skills").send({});
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to create a skill", async () => {
        const response = await request(baseUrl).post("/skills").send({
            name: "test2"
        });
        expect(response.status).toBe(201);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.name).toBe("test2");
    })
})


describe("PATCH /skills/:id", () => {
    beforeEach(async () => {
        await SkillTest.create();
    })

    afterEach(async () => {
        await SkillTest.delete();
    })


    it("should reject update a skill if request id is invalid", async () => {
        const response = await request(baseUrl).patch("/skills/0");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to update a skill", async () => {
        const skill = await SkillTest.get();
        const response = await request(baseUrl).patch(`/skills/${skill.id}`).send({
            name: "test3"
        });
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(skill.id);
        expect(response.body.data.name).toBe("test3");
    })
})


describe("DELETE /skills/:id", () => {

    beforeEach(async () => {
        await SkillTest.create();
    })

    afterEach(async () => {
        await SkillTest.delete();
    })


    it("should reject delete a skill if request id is invalid", async () => {
        const response = await request(baseUrl).delete("/skills/0");
        expect(response.status).toBe(400);
        expect(response.body.message).toBeDefined();
    })

    it("should be able to delete a skill", async () => {
        const skill = await SkillTest.get();
        const response = await request(baseUrl).delete(`/skills/${skill.id}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Delete Skill By Id");
        expect(response.body.data.id).toBe(skill.id);
    })
})