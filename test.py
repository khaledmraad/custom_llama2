import ollama
stream=ollama.chat(
    model="llama2",
    messages=[{"role":"user","content":"what is 1+1"}],
    stream=True
)

for i in stream:
    print(i["message"]["content"],end="",flush=True)

print(stream)
