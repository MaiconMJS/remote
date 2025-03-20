import axiosUrlBase from "@/util/axiosUrlBase";

test("GET /api/status", async () => {
  const response = await axiosUrlBase.get("/api/status");
  expect(response.status).toBe(200);
});
