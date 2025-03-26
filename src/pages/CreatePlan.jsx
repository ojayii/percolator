import {
    Box, Card, Typography, IconButton, Container, Accordion, AccordionSummary, AccordionDetails, useTheme
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import BackButton from "../components/BackButton";

import { Link } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";
import PageWrapper from "../components/PageWrapper";

export default function CreatePlan({ workout }) {

    // return (
    //     <Box padding={2}>
    //       <Typography variant="h5">Create Your Workout Plan</Typography>
    //       <Typography variant="h6">Workout Type: {workout.type}</Typography>
    //       <Typography variant="h6">Equipment: {workout.equipment.join(", ") || "None"}</Typography>
    //     </Box>
    //   );

    const theme = useTheme();

    return (
        <PageWrapper>
            <Box bgcolor={theme.palette.background.default} pb={10} maxWidth={"60rem"} marginInline={"auto"}>
                {/* <BackButton pageTitle={"Workout"}/> */}

                <Card
                    sx={{
                        padding: 2,
                        height: 250,
                        position: "relative",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwQFAAIDAQj/xABbEAABAgQDBAUGBQ4JCQkBAAABAgMABAURBhIhBzFBURMiYXGBFDKRobHRFSNCUsEWJlNicnSCkpOisrPh8DM2VGNkc3Wj0hclNDVDVYPC8SQnRGWElKTT4gj/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAlEQACAgICAgICAwEAAAAAAAAAAQIRAzESIQRBEyIyUUJhcST/2gAMAwEAAhEDEQA/AHNaPbRtaMtDWICG1YWwBVTySj9YmFvsJH15TY50m/8AeIhnbUE58B1gckJ/TTCx2Ga43f7aOf1jcN6E/kx7gRsEx6BHsIUPMkKDb0n/ALVhz7p/2IhwQpdvCM7uHv6172IgxEn6CnZGP+7ykDkHP1ioMbQIbJjmwFTeru6Uf3ioL4z2GOjCNNd0fPu2JrNtHUpQBT5KzYHceuP2x9Bb4Q+2ROXHgX86no9S4yBPoZFd2b4WrYUXKciVeNz00p8WQTxIGh8RC2r2xCpSilPUCoImgNQ24OjcHcb2P5sPhvVIPZHsL0NFdHydUVYlwvMJlqww+2TuRMoulfalXH0x0lsSysxZMw2tlfFQ1TDO/wD6EZ6ZmhDkt/2IjpUtntAqOE6RNsyIl5x2WZKnGF5MxLYJNrEb4WUEZZWuhfMuMTSczDqXBzSq8auMx0qmzGryYU/Tnm38m5KF5Vgd37YGZaqVKWmkScyrN18qkup1GvOJPH+i0cqkXUy1Zjxjnl+Ib1t2xYOtqXKKWpI/Bjn0FpRs8zCWOb0urVCkvh6nTbsu585JJv3jcfGLisYplK5JqTXaDKPz+WyJ9lZZWDwJABzd1wIoC1HJTcC2binsiLT1jYZeUadIpG/URJU3HFaIOw6NPKE/MjI55IyNRrPrYCNrR7GHdHWcwMbSk3wNVv6kfpCFbsPH17n+xlfptw1towzYJrHYwfaIVexb+O6P7FV+sbhloT+Y94yMj20Iyh5Ct25JzooJ5TDg9SYakLHbam8vRfvk+wQ0diZNF3siObANP7HHx/eqgytAZsg1wNKjlMTH61UGkB7GjpGEaQjNtScuL21/OpnsWYecJTbcm2I5ZXOmr/SMGOyeXQ6Ges2g/aiN45Sv+is/1afZHWEZWIrNuzeeSo6uT7g9KR7oIpRWbAdAV86Vl/1UUe3FOalUlXKbP6JgiohZ+oahF9srbEowBkVYg5ALw0tEK7ZHbZ6TxEIXE0t0WJqgkcJtmPotthsoKkqIWRogp4d8IPGzeTFdT++Jf2wkULj6YTVOldDQ5V0J1cQSfC0RPg1SqRKKb895xSE6ga5iOMGtdlb4ck/tWlfRFc2x9bdLdy+bOK/WRz12dqf1QtqmziLDTgbxHSXW0E5Q9YZVH7oXBjJSoSM6AGnQHPmL0P7YcO3drpMCK7Jxo+m4iJIbMMMYhwnR33JNUpNuyLS1zEsrKVKKBckHQ667os8aZNZWLBxmIrrUWmNMIVXA89Iy8pUPL2J5wol21JscwIFjfTjFVPPzlLeMvX6XMyLu7MWyATb2d0TeOSKrImcejjI5fCVP/lA/FMewOLDyR9aRkV7FbpT9ujn2LnddeX2xObcQ6LtLQsc0kH2R1EqKHH4+s2r/AHsqFTsa/jvLf2Ov9JENnHf8T6v97LhS7HT9fEn/AGQv9JMOtEn+Y+RGRkZEypkLXbUm8jRj/TLeoQyoXO2r/VdK+/UwY7J5NFhsfN8FNDlNTP61UG0A+x0/Wefv2Y/WGDiA9jR0ZCb22I/z7I9sg4n1mHJCg21JtWacrnJup9sGOxMv4jWpqs1OlT85lB/NiTEKja0eQP8ARm/0RE2F9DrSFvtuT/mSmn5s8kekGLqgG+AqMf6O0PVaKrbWn63JI/Nnmx6QqLLC5vs+o55NIHrtBeiL2y1bT8YPuIROPsjGL6o44bIQ7LLURyBF9IfbY+OTbfkhPVinSFS2pOSdWRnlHAi6et1lZTlGmt81rxlXsEbcqRWVnawHmWZOn0oFloFJcec1WOYSBpu4kxe4TxGxiDCjjCGeimpKZzOoBuMqtUqB47lejtgDreCV01ideU+3dh9TQbTfrW18DYjQxP2VSSlO1mbvdpphCByKlKuPUkxH6tdHZKDhVje21pvgN8/NmGT+daL7A38S6GOUiyPzAIptsYzbP5/scZP94mLfARzYJovZKNj1Wiy0c38gM21IvN4WeHyZ/h3p90Mebk5aeYU1PS7T7J3odQFA+BhfbbR8Th9w/Jn/AKP2QybaabiLwTfyYEfUBhv/AHJI/kx7oyDTLGRhLEQ49MyiyhbqyjeFE5gI3TXZuWcS7LktqH+0SSPZb6YJcQUBUk65KzIJbV1m3R8oc++FnXp5dDqPQPy7iri6V7godkRlBp2juhl6pjSRi8V/BtbkJtSU1BmTcXp/tUgbxfiOIgU2P/x5kB/5U4PzkwHt1htKEzic7YVdISoedzHaIMNlDsq9j+Rcp6ipgSLqCCNUK0OU/QeIHfFYy6ohONSsfkZGRkAJh3QAbYZKcnKRTkSMo/MuJnUqUGG1LKRY66cIPzuPCBHaA83Ly8gp18tB58sp4DMoEp14G6bQY7FnohbILs4Ydl30lqYTPvktLGVQGblvg7j59r9EUxNiaaavm1ctoc3zvHW45xaYYxJUqNM5m33nZckBUs84VgjmCfN8LeMK5K+x4xuPQ7oU22gf5zpKubLo9Rhm02flqlJtzUovM24OrwI5gjgeYhZ7alJM/Rjws8PG0PElm/EY+HFZ8PUxfzpRo/mCLGKjCK+kwpRlfOkGT+YIt+EBjrQAbaNMKS/3+17DEzBpzbPaYeSbf3hERdtP8T2zynGj7YkYH12dyB5KXu/rlQXok/zYRI/hEW35ITOMam7Q9pD1QlQkuIba85NwElQCtOdiR4wcY6xTUsPzNMlqPKNzMxMpVmLubKABYWsLevhu1vCwx7OKm8XPTCm+jKmm+pxTZSdDrqQb7oTmuVD/AAyjFTNqC8vEZrz88CxKpWFISRcpcPK/HKkCCHBM1T5en1Si5EMzTr4fb/nEgWt4Wvrz74lbQq2mVmW5YO2UltIQOF7f9Yg4Zw0amy/UZzOjI4A2lBsSveTfha4jlk+MmzqU5ZagHe1o9Js5qSvtW1/3iYstnRz4Io55MW9ZEA+M6w9N7PqpJP2L7KEnONA4gKTqB9H0bjHZerPgOkHkhY/PUI6cc1KHRzThKGVpg5t1/wBS0pfzZ4foKhloN2wrsELfbwLYXklfNnUj8xcMWX60u19wn2RQRfmzpljyPYyMER1b2jTUw0pcxKpmZFRt0YGRbJ+StJ9VjvioNSpGJ5USU6Ojcvdpaxqg8ucdcaUlNMxFOSRaV5M7dxB4BCtR6L2/BgDmZVbLimb2cQboVz/ffDT7iDG7f9ltVaLMSpS3NyyxLo0bcSCUHhv3AxZ4AqyMP4jknWGwsOLDa0p1z5rp9OvtjjhXGs/TT0c8CUp6pWvcRyV74v6zV5iaS3PYefEvNhXmZUKBTx6yhbQ7uyOZuSOpJMYExtXoMrUFyU7K1GXcbOUlbKSPQFEwX0is06tSTc7TJpuYYc3KSePIjfeEBtGmZWbp1LnV9GmqEZH0o6102ubkaaHd2GOWzbErVGrYlJ9STTp05HMx0Qrgv6D2d0VTtE5qtH0mDC624jNhWVPKeb9ioJn5JCLBsFAVvKFbz2QEbX2XGcKMZnFrSJxuwUSbaKhls5pTbVFfhRUxV8KPzkyvpPI5tyXUsjrBICSCefna9w5wOV6YqEg82un09M4y6bFRPmq7be0xYyuKJ76m2ZOn9HLsNJLauiTlXnB1N7+dx8YFGcSztLmymdJfbzWK79YpjZIJq6Hw5O6QVYfx6mmV9iVRKPPy7uUTSmV9VCr2K0ncQnib6+EWu1ebl3naKWyrOhboAABFinnvvG9EVJ1+T6aVmmlrCCVIIIURxta+YD0xR4nlXJ7DzTlPqTc45RisuyyR122iSLkEBQsPAgXHbCDqRbLh5doZdDnaa5s7pEtPVJEkJqmNthzpg2pPUAOUniLxWYSxS5LVj4Aq1Ql516w8mmmXUqRMJ1ANwdFaG4PEaQtpSty9ZwmzRZyVDxkUZQlB6wQPlJ4kbrp7ARyHtIoWEaqkJYVOU+e3IyTPVJ5pJTe45Gx798WkSUqfY0NsLjb2B1utqStImGiCk9sebNpmZOB5IIGVKXXk5+VnVQrsS4cmKJRVrlcQvzLXSayrycyNeNr23k/J4xPwDtARRmm6TXJdyWlVOOFEygkt5ibm45A8RuvuEBt0I/s7Q5atJKqMqlLL3QvDVtzKDZX78YSWIsPzjVRaU8oqS0A0oW3fGZjr3317ofEnMMTcuw/LPIeZWkFLjarpUnsO6FdtDrvwdiVySmUJMtMSucLA6zar28eHoieSLTuOzoxzTXGYAY0E7WsRPN9G4hDa1JCTwAP/AE/bF9gmsT6Kk1RH5hT0oGHVISrUkgaa8t8T66FsyYMwzlfLCekQRYqVu9ZvbsPbFFgOXcmcWTM9dSkSEk47m+2UMt/G6iOwRG+SY2NtTJ2I3XH6dVmgVdHLyp6o3b0p+mD/AGSzRTgORceUS20t0BKRvGdWvrhaPTjAomIJZbiumXKiyhxVnBIPqg12RPLVg5lLc4EqDzg6I8Lq/b642K44webNvK2TduT6FYOlFD5U4gi+h8xcMCnvA0uVdJABYQq57UwoNr6kJw5LJ6ZKnUzYunjuVrBhh0uP4ZpmVy6FyjV9d/VEdSdo5FJxbYY+Vs/ZEfjRkDfk/wBrGQ1i2we2k0yWflW35YhT8oSl1NySGyb+q9+4wkqw+95WUoKTlGXMd4Agjf2jViaS4mYeCkOCywUJ6w9EUjlYl15rybGY6lWURk2tjwi4u2Dby3FrOdWaJcpMqZaVkVk3XIUQT3RPpMtT6hVkS84Cwh3RK29LHtEX8/QKdSZplxjO4kaoKxuUOesZRbLOaWwUKZ+bPTLbmngPNUElQ9IEdZKXnZpaGJKUU66s9VIGZRPYILm6rMNZ8k06Ur3C5HhpG6cQz7WXJMOoUkEZkKsbHtBjUw8kM3Zphyq0WiOmtuurmJl0OBhwn4oAaX7TxHdyjltn1wgkZbWnEewwvRjWvpzdHVJsZrEjPfu3xX13GNbnZHyWanfKWQR1H2W1jda4uNDbjGJONsuMM0wTeFKtMpuVy9QIcsbENqQnXwI9ZgbxE00hAU6AkjQG2vdEKn4yr1GZfl6fNJbYmSVPNeToUFki2t0ngI5GtMzrR+EmFrctZK2VBFvCxg8ujfE4ztEanVZylLvJLcBKr3KyB6BBTL4wdT5RMNsNCfelTLqeBJuk7xry04eMCZTSyvN0c3r/AD6f8ETqTUKVIOlblKVOApsEvzBTbt6oETaOlM5S75p842+24lC0KCkgC5PMeIg7kaGrElNanUyjtPmXL5XlJul4C1iod99dDpyMDVMrlDRUs6qGwyyQdM6nRf7knXxMF3+UdKGEMIDQyJtdMlYg89HbD0RkSmrfRUYiFZkqZ5BXmlpZ81qbsXEkjhn3/jC8TcJ1DDPkDsniHoJlta3CFXByg2sRxBjniTHsvXaQ5ITXSIDhGdaGhc27M0Bj03ILYMshro0lxRVMqT1iDawIA3Cx9MFiqIby1WVhCpB/BlX8vpjrl3JCaBTk579O5SbHmFRFx3WkYmn2KhLyzrJEqpt1hRCiFXuMpG8ejuECFIRR5SqysxPTKJqUaeSXmAwodIniOEWOKZjCs7NNuYck1yLYbUFtuZjdV9Doo20g0GhtV+fw1VE0196qS5U0gofRntmSDoDu4k+vfFBX8W0WRkppmisSssHQEr8nSAXPuinfy1POF3Kmhvy6WCl9E3qVOB1WRWugAJuNLb+UQZlhDT2VDjxQD8penoiE4ps6MUuPontzOWWeQr4wvNFGa+/jf0iDTZPOoblHWltu71KzhV08PfAJLlOkXtAoE1VVOqlsRTMmoElDd1klNhxChz9ULHXEGTfIINqzocpzRR0n8Onf4x3w9NNmi05La8q0y6Sd/IRT4ypkxTMIsS83PKm3W3gS6u91XJ5knS9omYWe6SnSTaEbpdNxzh3ajVkXTdl75Ufs8ZETyf8AmoyJd/s1L9CmTT5o+bJzH5JXujBKrCiktOBQ3hQtaHJiCiV9mWWtLIK13Skh1PVvx3wrZ+lVE1M09aUJcQm7llg2Frkkx3ySiSjkb2VgSvpE2QlGUg5yqLp+ozU6kNF1x0A3AQm/0RYolpNpCQgJbyHqgJspXG5v++sVGHX/ACeu0t06FDq/RrCRn02iccqyJtejcS08odSVnVf8JXuji81NM3S6w+g7/jCU+0w6MPVh6eILAGVN1C+gNhreA2oYUrVdn5ifmqlLOOOOKCuqrq20sNNw3CNinzQIZeSsAPKmgknq3vY3PHujmZtB80JJ4DWL6sYOcp7TTXTMuPuPBhCU5gVKtfjYHeNe2LSr0uWoWGn5BEulycISpU2lIUVdgVwHC3ZCTyqEkvbKSyRjX9gP5PMTAu2w6oA70Nki57hGKp022AXJWYQDuK0lIPpEPqmYFmG6PJS65xEqQ30ryOjzEuq1USbi+gA/BEAmL8OPJmEBmoeUTDzoYlmkM2JJO/fu7e6KuMUPzd0ACZValBKU3VyCwTHdVKnEAFyTeQlWiS4hQCu7SH1L0GTwthZuXk5dp+Yy3efKbKcVvJv37hwEDWLGEVNyhNrd6i3gVknQ2Fz6d3jEuVuiXz/fiKpchMMlBcayBQCk9JobEaEA+mNFrtoVJuPtk++GLM4KRPzT0zNT00XXFEkqSjUcLbwByHARphfAUjUMSKbdU+7LSISp4KygKUT1U6cDbd4RR/Uop2L9LLjjJeQy8tsecsNko9No3lKNUZ1p9ySkXX0Nizi0bkm19d3AiGnjQeT4fnJdbqyshZbRlGUAcvCIGyoqfZqMpl6sx0oV+RuIVvoMJ3YrzJvJWUrQApOigVAEb+3sPojaflHabOOyk6nI+0QFJvfW3MdkWdVa6KrzLfVTqTpfrX109HtiTWXXp5LS6pKHMWgpp9C9Si19/h64WUqdF4K42DYcbGtr9kdETijo717bj2QU1/Z3P0elS1U8sl3ZKYsAdQsKIvYpsR64oEUWZeWhMsekSu4KwDZJBtY950B43g0mhVL0aJqDaRbIqDfZ1Nl1cw8eqhs2SCdVGw0gOXhupg2DSFkbwlxIPrgu2cImqdUfJZyScTmcC0haTZQykHXdwEJxgPNTottpBz0BSgVEBaNeZvvjrgt6XRRpRZzqV0AQSE35xCx4p9dCeLoV0fSjKCmwAve0EOzlxo4YlQpO4HXLbiY042iCdLs2+E3fmrjyL3NL/NXGRPgD5EaYxriJVD7yzZuXBIHzlHhClpx6d1yozQDqludIrOLjLy58dItsZTbtSqEtR5NK3FrUFupRxPLwGvjFrQ8IoIU5O9MxkWAWwi4UOVr90N5GRLps5s0qhX7B56ZcbeGaymiSmywLpPDXuiho4WqsU1DJAWqZUlJVuBJ4w1pnDVIalHHQH37EqSSco3aC1tbQrcNMmZxBSmkaFU3dRG8Aak+AjYpKUGkJ4vcWhwUelqpKHiXisvWyg2ASBvtbgVD1CLFx1DSQV3ylQSLJJ1Pd7TGEBVwBlFgEp5DhFBjSqLkaSWZW/lk2roGUjeL7z+/OLxXGAYR9Iq5Z13EGKXqgjolSVP8Ai2C65lQSNSrtv7oMqJS5aqPNqfZUmXlnUvls6pKgbpseV9fCKCm06QkJVmjzLDilIQkFxB0Uo6k6dvqhhU2RapEgmWSRoSpZtrru9AsI4Mf/AEZuX6FX3y36Rwr86ZaUyJUA45oOcLGjzLFSxWahMKtKS2ZiUzDRTnylfR4iLbHdYccBZlBnmH1dAwBzO8/v2RWu4fmE02SlaOVzAl+uEgWGf5RvbedYv5U+uF1Y+XI1H/QsqtSSlvyeeaytKsEqHyh4fTFVUqMxN09iVcUUutOB5p8fwjR0KbH99COIjjSpSdqEuF1FRSywrMFrFzYcPG9os3VqWpS1+cpXrgeJB7bIYFJy5+irrE78GSDkyACpNglJ+UdQALcbxb4LbFJpyGXsjj756abWTrnPu3RQhTNRxGhC05pSnWWpKdy3z5qfDU98WlceytvCSkUJW6Ot1rkp8d0DyPJUW4ofLl+NcUR8dNUyYotQmGHSp5LaiklW+/ARRbGGwaiXToA9lOvNkxNknugkJpMpJsTRX1chaMxe3nZRvGt90C1BxDW6fihuUpdKa8ofXZMqpot67r6+b1b6ncIbDbgm3ZTx5SnFt+ytxhLGUxJMJCL5VlKt2liU8uyJzLC5/DUtqMzeZqxNgBc29RESNpDK/hBb0wlpp8rutLT+ZIUdTY2F9Ty5xLwEiWn6XMSBcSmaMwVIQd6klANx+KYbPG0el400lTCrE1Wpc5ghFDXMBFTl0Nq6BaSM9k2KkEiyhY30J0gY2cluVxK2wsBYmWXWjn1ucpWL+KY4TtATJVMzE9PqlVMkNol1ozBy6SLA30J3bor5Cb+D6nJzoNksvJUo2vZF7K07s0Ug+cLRGcXCdBtV5JgTq0pIQoa2jfCqGzWmgo3sFZB2290R5/EtBeBcEwS+knITKnU23E5zYeERsOTTNQLriHAHEdZJQbW17NY4skJx+x3YcqnBwZcbUlNnBM2ENpCgtvW32wimwjMPM4RkPJ02UtK1EqP25H0RMrVYZfpy5GutMqlzYKUGlkr46kOC3hFCjEtGk5dqUlwyllkEIQmTdJFzc69NzilzyY+jhy45Qk4sJPKp75yYyB36sKZ87/4C/wD7o8ifxZ/2S4s2wHIvPqmMQTC0JcmXSy3feP3IA8IO2VOOMBt5WVwXsoborKfTmmJaXallHomUZUEW6pET5dLimU2so7iDrfWOLLkjLI5SOLK+bsjz8i242VeVLRMN5tyr2NuUB2zGlBtL9VdFlrUpqX+5v1j6QB4HnDDflUrYcJARdPWurS0VtPYakZVqWlwQ0ykJTfebfSd5ju8CaknQ+FOKLIHqi8C1AR9UGLn6q4kGQpnxUvmF0qc4q8NfVHbFtVXIUpTctdU3Mq6FhI3lSuPo9sTKHLGhUFiRly8HUCywncpwnrH9+Ajo8rIoqn7KTfCN+wmk6RmqTczmBaa6yyFE5iPN48/ZHTEU+WZY2PxjumnCJUuz5FTkMqVmWeusnfcj6NB6YXmP670Ms6ttwhbnxTduHM+Huh8MFjh0HHFJUccKtN4gxq85nBTIoswlXG5IJ9R9UMMrlmnOl6UJYb6vRtpN7jTeIWWw9aXK3VFqsT0DZSk8BdW71QYsTiUOPueUXKSVrZKNwPmjfzMcfkTaaSjdk8/UkvZNr042VtSstdLbYC1A3uVEaDXkD64Ga1UEUynPTVwVBNkDgpXAenWJanFuLUtw5lKN1K5nfADj2bdnEuoZ/wBFlHEtKV851W8eA9sehXFUWguyxwfU1NUlThcbK1zaulJ1Usk7zpp3wYVKffdYHweEONOoKVZlgkEc9LwtcJ4bqVYpxdkQyEpeUlKnXLZeO4a8YZVPw/ONSCA5Ntsuo84toLh9do8fyME1k5Y1ZxZl92Cr8hUKUpVXlppCHmkKUlZIUpGm7KRodYm4dxHVMaSTdOal2JScSlKFVMHMrMQSVZABa9ju5xa1vDa36K8/JzD8w+Wyno0pACz6YqtllIGHXZiaxEEyS05ei6WYSDuUFaA90dWBTWO57K4OaxtLZTY3oM1h6ntS8/OJm3F3d6ZKco1Nsut+PtEBUmS0/wCUCbWx0HXKkLyqJ3AJtx19F4bu1x+TqVFkJ+nvhxhRcQHUK84JUOPeFQpKTT1Vapy8i090bjqiM5Tmy2BVu7o6pSVW9HpY4+kc6jPT1WWmaqU8++4TlaS6StXgO+LJrpXZTI+2W3chSpKhrF/S63L4cLsnTKRKGbSSnyuZHSOLUDuvYWGm4Wirn5hUzNmacQlK3znUlIsM3Hj3wcc1PpAyJx2VkvQ3pttbstUZVwNtpUcoVYX4bt/vjvh9NSpqRUFuJYknRa7hILx5IG9R8IKsAyNMlmZuZS6uYml6OpdZUGWAFAgXOi1bjv8AAxRT9VW/PNJpPllQn5lWQTbiBnUOTTYvktfst2RDnJycToUYqKkWbzKqkhxp/psy0WyqFiNNDuvA/L4PmpkOOeXs9Enqqc6NwpCrXKd28DleCLDlKcp6npWoT6XH3HB0gb6yJZRBPXcJAzqItlTftjXEWI3qdJyoYdDbyyoJBSCpobyRyvf2wn2g6gVfGatgt9TLv8tT+Rc90exL+Hqp/LZj0j/DGQeWUlxiM9h4NtdGheRYXa6ePfE5pRaauPNB83vitbCZdgpeS00oeaXl5d/ed8T5eaYASt1wCw0KUFSSe8AjnxjyZ+LlyaPEj/htPTHRNJbBUFOanu5en2GIqHNIr3pwzUyt+1k3skHgBuH79sVmJqsadSHFIVZ5z4tvvPHwEe942FYMaiXir6JmH8ldxk5Unxmp9KSptnkp4jU+Hug6o0srpVPrCTLp1N/OJ4dkKvDmNZXD9GYk5amGYKQVOrWcoWo+cdDfsGm6Gk3Un3KNLLmZZqVfcbDjrLRJCb6gEnja3jEHh+XJctIecJKVy0c67Ui22rrdZd/Dt8IWUzT3sSCqzjDZcak0mWlG0n+EcNsxHcLekRZY0rRZl3iyoh1XxTNufE+HugHlZ2dZl0yUrOzKW0jRlt02136Ax0ZZforjxuXaDbZpSqhh+Znn6mhMmlxlCULccF9L38254wXVh2WW4lMqhsJAClrQPONtNd9gD6SYWlBw9O1KpNeUSUyqVQOkdU4yqykj5NyOJI8LwwSg3JJSTc3HbGxQ5y5slmxxi7u2VdcqAptOdfsOlPUbSflKO7w4xKpdBoruz9qerEqt1pOZ2ynVJLrhPnGx4nd2WgJxZU0zdVLCFpLUsopSb71jzj4bvTA5N1GrPJTJqnnxLsqK2mukOUX5W37o0ppyLLF9Uxi0TFgo0sZRqmSTcuFXs2FtqBNjfNmN+88ouBjOTnmsqlKbum1lN5hY/bJN/VCgarVQleq8Eup/nE7/ABH0xLZrki6oGZlVMqzXC21ZraW7IPRnihY0UzMnMEFCmS5wKTc+g2VEKdp1PfSoustFfNScij9MBUrOSLuToqjYfY3LjS1raxZtzKkizDqgP5ty3sMZ0ZY60Wdb6QYZbpoQlLEutSkm9z1jrc35kwA0KZ8gxHT33TYImkZj2XsfUYvsQ1sSFPZl/J0LdmsznSFRCkIByhIG7Ugm5HCAxyYC3ulBUlYNxuOsBxTVIpByi7YxDQpWempmfqM0qVlw4pSmmE53XtdMg3JuN9zoRu10r8T5G5qXUzLNyzamx0bKJnpiAN2dXzzvMQZHEEzUHnEBKWwNc2a9z3WiU4ta/wCFDavwiPohccVBhnymTsB06YqFYQ6ucHkTJcZbYUrPnUpsk5EXuo63Jt4x3n5ij4XC5EOiWtouTYcKph423zDyR1ePUR6YqEPolyFNICFc0KsfTaIbsxKp1clm9CSq4vfvuIEofaxoyaVUQarUl1C6lTDKWGx1JeWl+jQgck6es68Yq6dJP1CZTLS7Dj77p6jaBqe3u7YMXcAzj0sZ1XkcshSc4S5NBOTsIykJPZfebc7RFUefoHSuS9TabJuFqlJgkqAvxFtCR6xBtJGps6/5OcVfYm/yxjIrfhqrf7zqP5dfvjyF5B7Iiq3VF/8AjnkdjSujB8E2i5wlLqffcqEytbpT8W2pZKjm4nXssPEwep2V0KQI+EH51Z4fGp/5ReI9aaoGHpVuXpyVgpTdNlE21O+/eYtGHZzSyqqRzRogWgExNUvL6sUJVdqXGRPar5R+jwizmsVO5XGkIaF0kJXl1See+IdDotCqMmhDuIhT5+5zommfijroQsEW0tv7YaabVIGFU7kTcAUY1asJmH0jyGSKXHir5W/KjxI9AMMSu1JRSoDRSj7REOk0h3DGHG5ZvoJkOrLrszLugpWrhv4WA8bwLYqqUwzKOOBKk36iFZhoTv4wqjxVBk/kkXmA5Om4hxPOTFRMs6xT0BDEs8AelUom68p32tYQ2GG5aVayy0q2kAaJaCQPQBHygw8pogocKSk3BB484v6djGt08AM1B4oG4LVmA9O6HoEk/Q6MU4xbp7TzLWjlrEDePTCnn6w667nLl1XJEazWOJurtCWqcvLTHzVuWSpPcrS3piBLsLcd6RE1INcR0081p+feNdAhHvsI2cQvUiTU0/T5RbTpzLS40lba1HTUKGh0iKucoVVOSZobkg+dz9NVdB72laegiK12UdmzaYqUi4D8lNQZA/SEbtUEW6ok1fczzB/54VxvZRzS0afU/PPTYl6Y0J8m5AaGVdvtkK1ER57B2Im1WTQp5St+Ztk29UWzOHXg5duWaCyN6Jhu5HeFRI+p+onzJab/AOHM+5UBYwfKCK8M4gQevQqj/wC2X7o4fAtbZUf811Fu/wDR1j6IMF0GtIvklquPuXHD7DEVymV1G9uuW73ffDUb5LBd+Sq5sZiUnlBKcoU6wo2FyeI7T6YirZeQevKrB+2bIgmmG6w1fMawkcc6nYrX3Jy/XdnPwlK+mNQylZAk55+RSUoYTqflA39sSfht75Usn1xhcmfs734xjXymZT/t3PV7oWkOpMxVZc4y/wCcY5mrnMFBhII1FzHbyybAv5Sr8Ue6NfhCb/lavFKfdApBtnQ4oqib9HMuIuSTZW8nff298RH6xPTAPSulQJJIubE3vzjoqozf8oR+TT7o18vmfszX5JHujUjWyL5c9zEZEr4QmfsrP5JPuj2NRrYyKpXSw2sJzXvp3wEVSouTTpUsxkZFGcuOKKd5ecxyCspsBeMjIU6fRayNXmqektysy6wki6m0m6T+DuizomJm2ZtIn3CZdWrnxeYDuHOMjIJOkwiOJcLuHrOEp+2kh7o2FUwY95zzCT9tTAr6I9jIcRxS0cEymEHgooqbCrm+tLULeiPPqew7M6szksv/ANI6n2KEZGRqEcmj0YIkHNWVyyvB0f8ANHv+T1u1wmWN/wCccH0xkZApCfLI4ubP0X81A+5fV9KTGjmzspTmIUR9q+PpRGRkakFZJHJeAFITnKXwOfTo/wAMcjhN1rRD88n7l9P7I9jIzQ/ySIz9FcZuHKlPo7CoH2GIqqVfUVSa/CT+2MjIQpGTZzNKV/vRz8mffGhpr6dEVNX4h98exkAqjzySfR5tT/NMedFU+FQR6D7oyMgGNSiqlQHlbJJPL/8AMdUorSPNmWfxR/hjIyMY36Sv/Z2/xU+6PIyMgmpH/9k=)", // Make sure path is correct
                        color: "white",
                        overflow: "hidden",
                        "::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, #5C4033 100%)", // Gradient effect
                            zIndex: 0, // Ensure it stays behind content
                        },
                    }}
                >
                    {/* Content inside the card */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 15, // Push content to bottom
                            left: "50%",
                            transform: "translateX(-50%)",
                            p: 1,
                            zIndex: 1, // Above the gradient
                            width: "80%",
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h6" mb={1}>{workout.type}</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                            <Typography fontWeight={500} display={"flex"} alignItems="center" gap={0.5}>
                                <AccessTimeIcon />
                                30 mins
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>~ 24 Task</Typography>
                        </Box>
                    </Box>
                </Card>


                <Box padding={2}>
                    <Typography mb={1} fontWeight={500}>Outline</Typography>
                    {/* <Typography>A full-body workout is a well-rounded exercise session that targets multiple muscle groups, improving strength, endurance, and flexibility. This type of workout is great for beginners and advanced athletes alike, helping build muscle, burn fat, and improve overall fitness.</Typography> */}
                    {/* <FullBodyWorkout /> */}
                    <Box>
                        <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
                            <Card sx={{ backgroundColor: "#F7F8FA", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                                <ImageIcon sx={{ width: "4rem", height: "3rem" }} />
                            </Card>
                            <Box>
                                <Typography>Side Strotch Left</Typography>
                                <Typography>8x</Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
                            <Card sx={{ backgroundColor: "#F7F8FA", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                                <ImageIcon sx={{ width: "4rem", height: "3rem" }} />
                            </Card>
                            <Box>
                                <Typography>Side Strotch Left</Typography>
                                <Typography>8x</Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
                            <Card sx={{ backgroundColor: "#F7F8FA", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                                <ImageIcon sx={{ width: "4rem", height: "3rem" }} />
                            </Card>
                            <Box>
                                <Typography>Side Strotch Left</Typography>
                                <Typography>8x</Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
                            <Card sx={{ backgroundColor: "#F7F8FA", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                                <ImageIcon sx={{ width: "4rem", height: "3rem" }} />
                            </Card>
                            <Box>
                                <Typography>Side Strotch Left</Typography>
                                <Typography>8x</Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
                            <Card sx={{ backgroundColor: "#F7F8FA", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                                <ImageIcon sx={{ width: "4rem", height: "3rem" }} />
                            </Card>
                            <Box>
                                <Typography>Side Strotch Left</Typography>
                                <Typography>8x</Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
                            <Card sx={{ backgroundColor: "#F7F8FA", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
                                <ImageIcon sx={{ width: "4rem", height: "3rem" }} />
                            </Card>
                            <Box>
                                <Typography>Side Strotch Left</Typography>
                                <Typography>8x</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    position: "fixed",
                    bottom: "4.5rem",
                    padding: "1rem",
                    width: "100%",
                    display: "flex",
                    gap: "10px",
                    maxWidth: "40rem",
                    left: { lg: "50%" },
                    transform: { lg: "translateX(-50%)" }
                }}>
                    <Button
                        component={Link} // Makes it behave like a router Link
                        to="/video" // Target route
                        variant="contained" // MUI Button variant
                        sx={{
                            borderRadius: "50px", // Rounded borders
                            padding: "10px 20px", // Adjust padding
                            backgroundColor: "#29E33C", // Background color
                            color: "white", // Text color
                            textTransform: "none", // Prevents uppercase text
                            // marginRight: "10px",
                            // width: "75%",
                            flexGrow: "1",
                            boxShadow: "0px 0px 15px #29E33C",
                            // "&:hover": { backgroundColor: "darkblue" },
                        }}
                    >
                        Start Workout
                    </Button>
                    <IconButton color="warning" sx={{ backgroundColor: "#282A2C", padding: "1rem" }}>
                        <MusicNoteIcon />
                    </IconButton>
                </Box>
            </Box >
        </PageWrapper>
    )
}
