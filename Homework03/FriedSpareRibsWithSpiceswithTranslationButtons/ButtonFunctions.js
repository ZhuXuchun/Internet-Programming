function Translation(language) {
/*
* This function defines a for loop to get the
* id of the text written in HTML file
* and after click the button, it can change the content into another language
* Language:Chinese,German,English*/

    let translation= [];
    translation[0]=["00",
                    "椒盐排条",
                    "Salz und Pfefferkoteletts",
                    "Fried Spare Ribs with Spices"];
    translation[1]=["01",
                    "我来教你怎么做\"椒盐排条\"！",
                    "Lassen Sie mich Ihnen sagen, wie man die \"Gebratenen Spare Ribs mit Gewürzen\" zubereitet!",
                    "Let me tell you how to cook the \"Fried Spare Ribs with Spices\"!"];
    translation[2]=["02",
                    "作者：Xuchun Zhu",
                    "Autor:Xuchun Zhu",
                    "Author:Xuchun Zhu"];
    translation[3]=["03",
                    "日期：2021年11月15日",
                    "Datum:15,11,2021",
                    "Date:15,11,2021"];
    translation[4]=["04",
                    "原料:",
                    "Zutaten:",
                    "Ingredients:"];
    translation[5]=["05",
                    "1.灯笼辣椒 (1.29€)",
                    "1.Paprika (1.29€)",
                    "1.Bell pepper(1.29€)"];
    translation[6]=["06",
                    "2.猪肉 (700克,4.29€)",
                    ".Schwein (700g,4.29€)",
                    "2.Pork (700g,4.29€)"];
    translation[7]=["07",
                    "3.各种调味料：盐、黑胡椒、玉米淀粉、面粉、鸡蛋、姜、大蒜、料酒",
                    "3.Verschiedene Gewürze:Salz,schwarzer Pfeffer,Maisstärke,Mehl,Eier,Ingwer,Knoblauch,Kochwein",
                    "3.Various seasonings:Salt,Black pepper,Corn starch,Flour,Eggs,Ginger,Garlic,Cooking Wine"];
    translation[8]=["08",
                    "食谱:",
                    "Rezept:",
                    "Recipe:"];
    translation[9]=["09",
                    "1.把猪肉切成5厘米左右的小块，放在一边，静置。",
                    "1.Das Schweinefleisch in kleine Stücke von ca. 5 cm schneiden, beiseite stellen und stehen lassen.",
                    "1.Cut the pork into small pieces of about 5 cm, set aside and let stand."];
    translation[10]=["10",
                     "2.将姜和蒜切碎，拌匀。",
                     "2.Ingwer und Knoblauch hacken und mischen.",
                     "2.Chop the ginger and garlic and mix them together."];
    translation[11]=["11",
                     "3.将切好的肉放入容器中，加入切碎的姜蒜，倒入料酒，腌制1小时，让调味料的香味进入肉中，方便后面的炒制步骤。",
                     "3.Geben Sie das geschnittene Fleisch in den Behälter, fügen Sie den gehackten Ingwer und Knoblauch hinzu, geben Sie den Kochwein hinzu, marinieren Sie 1 Stunde lang, damit der Geschmack des Gewürzes in das Fleisch eindringt, was für den späteren Bratenschritt praktisch ist.",
                     "3.Put the cut meat into the container, add the chopped ginger and garlic, introduce the cooking wine, marinate for 1 hour to let the flavor of the seasoning enter the meat, which is convenient for the frying step later."];
    translation[12]=["12",
                     "4.将青椒切丝备用。",
                     "4.Schreddern Sie die Paprika und legen Sie sie beiseite.",
                     "4.Shred the bell pepper and set aside."];
    translation[13]=["13",
                     "5.打三个鸡蛋，将蛋清和蛋液混合均匀，使其粘稠。",
                     "5. Drei Eier schlagen, Eiweiß und Eiflüssigkeit gleichmäßig mischen, damit es klebrig wird.",
                     "5.Beat three eggs, mix the egg white and egg liquid evenly to make it sticky."];
    translation[14]=["14",
                     "6.在蛋黄和蛋白混合物中加入50克玉米淀粉，搅拌均匀。",
                     "6. 50 Gramm Maisstärke zu der Eigelb-Eiweiß-Mischung geben und gut vermischen.",
                     "6.Add 50 grams of cornstarch to the egg yolk and egg white mixture and mix well."];
    translation[15]=["15",
                     "7.这是非常关键的一步。 需要将腌制好的肉条放入蛋液中定型，然后取出，放入准备好的干面粉中，外皮裹上一层面粉。 最好不要感觉粘在手上。 如果面包粉不够厚，在后续的油炸步骤中外皮会脱落，导致最后没有酥脆的味道。",
                     "7.Dies ist ein sehr kritischer Schritt. Sie müssen die marinierten Fleischstreifen zum Größensortieren in die Eiflüssigkeit legen, dann herausnehmen, in das vorbereitete trockene Mehl legen und die Außenhaut mit einer Schicht Mehl bestreichen. Es ist besser, sich nicht klebrig an der Hand anzufühlen. Ist das panierte Mehl nicht dick genug, fällt beim anschließenden Frittieren die Außenhaut ab, sodass am Ende kein knuspriger Geschmack entsteht.",
                     "7.This is a very critical step. You need to put the marinated meat strips in the egg liquid for sizing, then take them out, put them in the prepared dry flour, and coat the outer skin with a layer of flour. It is better not to feel sticky to the hand. If the breaded flour is not thick enough, the outer skin will fall off during the subsequent frying step, resulting in no crispy taste at the end."];
    translation[16]=["16",
                     "8.接下来，进行煎炸部分。 锅预热后，需要在锅中放入大量食用油（需要能把所有的肉条都浸没），待油温达到70%热时将加工好的肉条一条一条加入（以免面粉把肉条粘在一起）。",
                     "8. Fahren Sie als nächstes mit dem Frittierteil fort. Nachdem der Topf vorgeheizt ist, müssen Sie viel Speiseöl in den Topf geben (Sie müssen alle Fleischstreifen eintauchen können) und die verarbeiteten Fleischstreifen nacheinander hinzufügen, wenn die Öltemperatur 70 % heiß ist ( damit sich das Mehl nicht verdreht, kleben die Fleischstreifen zusammen).",
                     "8.Next, proceed to the frying part. After the pot is preheated, you need to put a lot of cooking oil into the pot (you need to be able to submerge all the meat strips), and add the processed meat strips one by one when the oil temperature reaches 70% hot (in order to prevent the flour from turning the meat strips stick together)."];
    translation[17]=["17",
                     "9.待肉条炸至表面金黄后，将其从锅中取出，静置沥干油，待用。",
                     "9.Wenn die Fleischstreifen frittiert sind, bis die Oberfläche goldbraun ist, nehmen Sie sie aus der Pfanne und lassen Sie das Öl abtropfen, und legen Sie sie beiseite.",
                     "9.When the meat strips are deep-fried until the surface is golden, take them out of the pan and let stand to drain the oil, and set aside."];
    translation[18]=["18",
                     "10.炸好的肉条静置20分钟后，在另一个热锅里加少许油，加入大蒜、辣椒和甜椒，翻炒一分钟，然后加入炸好的肉条，一起翻炒约再过一分钟。 上菜前，根据自己的口味撒上盐和胡椒粉即可食用。",
                     "10.Nachdem die gebratenen Fleischstreifen 20 Minuten stehen gelassen haben, etwas Öl in eine andere heiße Pfanne geben, Knoblauch, Chili und Paprika hinzufügen, eine Minute rühren braten, dann die gebratenen Fleischstreifen hinzufügen und dann zusammen etwa anbraten noch eine Minute. Vor dem Servieren nach eigenem Geschmack mit Salz und Pfeffer bestreuen und servieren.",
                     "10.After the fried meat strips stand for 20 minutes, add a little oil in another hot pan, add garlic, chili, and sweet peppers, stir fry for a minute, then add the fried meat strips, and then stir fry together for about one more time minute. Before serving, sprinkle with salt and pepper according to your own taste and serve."];
    translation[19]=["19",
                     "瞧！ 请享用！！",
                     "Voila! Guten Appetit!!",
                     "Voila! Enjoy your meal!!"];
    translation[20]=["20",
                     "感谢您的关注！",
                     "Vielen Dank für Ihre Aufmerksamkeit!",
                     "Thank you for your attention!"];
    //All orders should be displayed in ["Id", "Chinese","Deutsch","English"]
    //The Array above stores the texts needed by the HTML file "Fried Spare Ribs with Spices with Translation Buttons"
    for(let i=0;i<translation.length;i++){
        document.getElementById(translation[i][0]).innerHTML=translation[i][language];
    }


}