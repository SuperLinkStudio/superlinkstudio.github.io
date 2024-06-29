# Ollama Service Forwarding
 Ollama的转发服务(顺带处理了流式数据)
## 处理数据的内核文件
`get_answer`是一个我自制的内核文件
用法：命令
```shell
>>> get_answer {您的问题}
{答案}
```
本服务需要Ollama运行在`Windows` 环境下的 `localhost:11434`并且是`gemma`模型，目前不支持`Linux`,`Mac`

::: warning 尝试其他模型
如果您真的想使用其他模型，我们只能提醒您，我们只对了gemma进行适配，其他模型可能无法使用，后果自行承担
`get_answer --model {模型名称} {您的问题}`
:::

## HTTP API
> `/api/generate`
> `/ctask`
> `/get_task`
### GET /api/generate?prompt=Hello \
> Response:`{"model":"gemma","created_at":"2024-05-01T02:57:32.5266201Z","response":"你好","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:32.92314Z","response":"！","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:33.3292828Z","response":"请问","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:33.752289Z","response":"有什么","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:34.1388718Z","response":"可以","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:34.559036Z","response":"帮","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:34.9719866Z","response":"您的","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:35.5254254Z","response":"吗","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:35.9243497Z","response":"？","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:36.3197478Z","response":"","done":true,"context":[106,1645,108,87139,235544,107,108,106,2516,108,87139,235482,154921,41778,5275,237103,38856,236403,235544,107,108],"total_duration":6379901600,"load_duration":632900,"prompt_eval_count":7,"prompt_eval_duration":2583622000,"eval_count":10,"eval_duration":3792101000}`
### POST /api/generate \
> Response:`{"model":"gemma","created_at":"2024-05-01T02:57:32.5266201Z","response":"你好","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:32.92314Z","response":"！","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:33.3292828Z","response":"请问","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:33.752289Z","response":"有什么","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:34.1388718Z","response":"可以","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:34.559036Z","response":"帮","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:34.9719866Z","response":"您的","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:35.5254254Z","response":"吗","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:35.9243497Z","response":"？","done":false} {"model":"gemma","created_at":"2024-05-01T02:57:36.3197478Z","response":"","done":true,"context":[106,1645,108,87139,235544,107,108,106,2516,108,87139,235482,154921,41778,5275,237103,38856,236403,235544,107,108],"total_duration":6379901600,"load_duration":632900,"prompt_eval_count":7,"prompt_eval_duration":2583622000,"eval_count":10,"eval_duration":3792101000}`
### GET /ctask?content=hello
::: warning 使用提示
此API需配合 get_task 使用
:::
> Respose:
```json
{
    "code": 200,
    "data": {
        "status": "ok",
        "task": "FPeDYLqX"
    },
    "msg": "success"
}
```
### GET /get_task?task=FPeDYLqX
:::warning 使用提示
此API需配合 ctask 使用，并且Ollama处理有时间，所以中途请求获取任务ID（task）时会报错
:::
> Response:
```json
{
    "code": 200,
    "data": {
        "status": "ok",
        "task": "Hello!"
    },
    "msg": "success"
}
```