import Kafka from "node-rdkafka";

const consumer = Kafka.KafkaConsumer(
  {
    "group.id": "kafka",
    "metadata.broker.list": "localhost:9092",
  },
  {}
);

consumer.connect();

consumer.on("ready", () => {
  console.log("consumer ready");
  consumer.subscribe(["test"]);
  consumer.consume();
  consumer.on("data", (d) => {
    console.log(d.value.toString());
  });
});

