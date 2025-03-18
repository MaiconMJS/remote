import apiBase from "@/util/apiBaseUrlAxios";

test("GET /api/status", async () => {
  const response = await apiBase.get("/api/status");
  expect(response.status).toBe(200);
});
