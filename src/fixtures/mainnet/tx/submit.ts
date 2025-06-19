import { expect } from "vitest";

export default [
  {
    testName: "tx/submit - valid CBOR",
    endpoints: ["tx/submit"],
    postBody: Buffer.from(
      "83a40081825820daa9d5703beb00d51d9baeb04a611e15178c522cad6061fc4cfa4d4aa6d30d850001818258390025132f296d9a73876fbdf1452b1253077bf8eb9b95b1eb932895b5398e38024e1bcbdd6341cb96a3403d5a64ada057798094d2383172b1d41a00958940021a00030d40031a0259b6a0a100818258204f75edef55c3e94b233ba6b6d9182832e0ef8c0f24427666e3056ff3ee30645e584073bd801ffae4f22453308cec55faa36e8abf3a7e51e82b04e0e0156453f994a2c2f696d0a90df3d25018ad2bcc6911ade49c7c010805e04415c9302c8cc61909f6",
      "hex",
    ),
    headers: { "Content-Type": "application/cbor" },
    response: {
      error: "Bad Request",
      message: expect.stringContaining(
        '{"contents":{"contents":{"contents":{"era":"ShelleyBasedEraConway","error":["ConwayUtxowFailure (UtxoFailure (OutsideValidityIntervalUTxO (ValidityInterval {invalidBefore = SNothing, invalidHereafter = SJust (SlotNo 39433888)}) (SlotNo ',
      ),
      status_code: 400,
    },
  },
  {
    testName: "tx/submit - invalid CBOR",
    endpoints: ["tx/submit"],
    postBody: "invalid CBOR",
    headers: { "Content-Type": "application/cbor" },
    response: {
      error: "Bad Request",
      message:
        '{"contents":{"contents":["DecoderErrorDeserialiseFailure \\"Shelley Tx\\" (DeserialiseFailure 0 \\"expected list len or indef\\")","DecoderErrorDeserialiseFailure \\"Shelley Tx\\" (DeserialiseFailure 0 \\"expected list len or indef\\")","DecoderErrorDeserialiseFailure \\"Shelley Tx\\" (DeserialiseFailure 0 \\"expected list len or indef\\")","DecoderErrorDeserialiseFailure \\"Shelley Tx\\" (DeserialiseFailure 0 \\"expected list len or indef\\")","DecoderErrorDeserialiseFailure \\"Shelley Tx\\" (DeserialiseFailure 0 \\"expected list len or indef\\")","DecoderErrorDeserialiseFailure \\"Shelley Tx\\" (DeserialiseFailure 0 \\"expected list len or indef\\")"],"tag":"TxCmdTxReadError"},"tag":"TxSubmitFail"}',
      status_code: 400,
    },
  },
];
